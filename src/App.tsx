import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing/landing.page";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);
