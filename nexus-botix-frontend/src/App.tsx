import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useScrollToTop } from "./hooks/useScrollToTop";
import Home from "./pages/home/Home";
import ErrorPage from "./pages/errorpage/ErrorPage";
import AboutUs from "./pages/about/About";
import SignUpForm from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Pricing from "./pages/pricing/Pricing";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfUse from "./pages/legal/TermsOfUse";
import DataPA from "./pages/legal/DataPA";
import GDPR from "./pages/legal/GDPR";
import Faq from "./pages/faq/Faq";

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
      },
      {
        path: "/nexus-botix/faq",
        element: <Faq />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
