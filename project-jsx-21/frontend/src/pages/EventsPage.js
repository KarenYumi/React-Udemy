import { Link } from 'react-router-dom';

const EVENTS = [
  { id: 'event1', title: 'Event 1'},
  { id: 'event2', title: 'Event 2'},
  { id: 'event3', title: 'Event 3'},
]

function EventsPage() {
  return (
    <>
      <h1>The Events Page</h1>
      <ul>
        {EVENTS.map(event => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;