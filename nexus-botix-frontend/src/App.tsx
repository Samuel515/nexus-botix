import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import AboutUs from './pages/About'
import SignUpForm from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Pricing from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nexus-botix",
    element: < Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nexus-botix/about",
    element: < AboutUs/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nexus-botix/signup",
    element: < SignUpForm/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nexus-botix/signin",
    element: < SignIn/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nexus-botix/pricing",
    element: < Pricing/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nexus-botix/privacy-policy",
    element: < PrivacyPolicy/>,
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
