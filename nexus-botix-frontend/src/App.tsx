import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import AboutUs from './pages/About'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/about",
    element: < AboutUs/>,
    errorElement: <ErrorPage />,
  },

  {
    path: "/nexus-botix-frontend/",
    element: < Home/>,
    errorElement: <ErrorPage />,
  }
  
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
