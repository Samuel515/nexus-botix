import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import AboutUs from './pages/About'
import SignUpForm from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/nexus-botix-frontend/about",
    element: < AboutUs/>,
    errorElement: <ErrorPage />,
  },

  {
    path: "/nexus-botix-frontend/",
    element: < Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nexus-botix-frontend/signup",
    element: < SignUpForm/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nexus-botix-frontend/signin",
    element: < SignIn/>,
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
