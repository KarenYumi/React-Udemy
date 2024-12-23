import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},  //element vai ser renderizado quando o path "/" for acessado
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
