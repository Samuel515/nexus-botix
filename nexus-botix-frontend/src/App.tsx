import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useScrollToTop } from './hooks/useScrollToTop';
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import AboutUs from './pages/About'
import SignUpForm from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Pricing from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import DataPA from "./pages/DataPA";
import GDPR from "./pages/GDPR";

function ScrollToTopWrapper() {
  useScrollToTop();
  return <Outlet />;
}

const router = createBrowserRouter([
  {
    element: <ScrollToTopWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/nexus-botix",
        element: <Home />,
      },
      {
        path: "/nexus-botix/about",
        element: <AboutUs />,
      },
      {
        path: "/nexus-botix/signup",
        element: <SignUpForm />,
      },
      {
        path: "/nexus-botix/signin",
        element: <SignIn />,
      },
      {
        path: "/nexus-botix/pricing",
        element: <Pricing />,
      },
      {
        path: "/nexus-botix/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/nexus-botix/terms-of-service",
        element: <TermsOfUse />,
      },
      {
        path: "/nexus-botix/data-processing-agreement",
        element: <DataPA />,
      },
      {
        path: "/nexus-botix/gdpr-statement",
        element: <GDPR />,
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

