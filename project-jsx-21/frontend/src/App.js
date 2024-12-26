import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, {loader as eventsLoader} from "./pages/EventsPage";
import EventDetailPage, {loader as eventDetailLoader} from "./pages/EventDetailsPage";
import NewEventPage, {action as newEventAction} from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/Roots";
import EventsRootLayout from "./pages/EventsRoots";
import ErrorPage from "./pages/Error";

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true, element: <EventsPage />, 
            loader: eventsLoader,
          },
          { path: ":eventId", 
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
              },
              {path: "edit", element: <EditEventPage />},
            ]
          },
          { path: "new", element: <NewEventPage />, action: newEventAction},
        ]
      }

    ]
  }
]);

function App() {
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
