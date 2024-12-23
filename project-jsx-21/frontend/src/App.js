import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailsPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/Roots";
import EventsRootLayout from "./pages/EventsRoots";

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true, element: <EventsPage />, 
            loader: async() => {
              const response = await fetch('http://localhost:8080/events');
              if (!response.ok) {

              } else {
                const resData = await response.json();
                return resData.events;
              }
            },
          },
          { path: ":eventId", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
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
