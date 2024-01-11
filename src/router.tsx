import { createBrowserRouter } from "react-router-dom";
import { LandingPage, SignIn, Dashboard } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/signin",
    element: <SignIn />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      // {
      //   path: 'calendar',
      //   element: <Calendar />,
      // },
      // {
      //   path: 'history',
      //   element: <History />,
      // },
    ],
  },
]);

export default router;
