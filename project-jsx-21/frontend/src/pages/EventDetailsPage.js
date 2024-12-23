import { useParams } from "react-router-dom";

function EventDetailsPage() {
  const params = useParams();
  
  return (
    <div>
      <h1>Event Details</h1>
      <p>{params.eventId}</p>

    </div>
  );
}

export default EventDetailsPage;