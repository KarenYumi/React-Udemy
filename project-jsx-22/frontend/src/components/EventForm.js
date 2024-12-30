import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  redirect
} from 'react-router-dom';

import classes from './EventForm.module.css';
import { getAuthToken } from '../util/auth';

function EventForm({ method, event }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.entries(data.errors).map(([key, error]) => (
            <li key={key}>{key}: {error}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ''}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ''}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ''}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ''}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  let url = 'http://localhost:8080/events';

  if (method === 'PATCH') {
    const eventId = params.eventId;
    if (!eventId) {
      throw new Response(
        JSON.stringify({ message: 'Event ID is required for updating.' }),
        { status: 400 }
      );
    }
    url = `http://localhost:8080/events/${eventId}`;
  }

  const token = getAuthToken();
  if (!token) {
    return redirect('/auth'); 
  }

  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + token,
      },
      body: JSON.stringify(eventData),
    });

    if (response.status === 422) {
      const errors = await response.json();
      return {errors};
    }

    if (!response.ok) {
      throw new Error('Failed to save event');
    }

    return redirect('/events');
  } catch (error) {
    console.error("Error in action:", error);
    throw new Response(JSON.stringify({ message: 'Could not save event. Please try again later.' }), {
      status: 500,
    });
  }
}
