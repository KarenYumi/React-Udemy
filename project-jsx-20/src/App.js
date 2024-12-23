import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Roots";
import ProductDetailPage from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },  //element vai ser renderizado quando o path "/" for acessado
      { path: "/products", element: <ProductsPage /> },
      {path: "/products/:productId", element: <ProductDetailPage />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
