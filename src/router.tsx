import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
    errorElement: <div>Error</div>,
  },
  {
    path: '/dashboard',
    element: <div>Home</div>,
    children: [
      {
        index: true,
        element: <div>All activities</div>,
      },
      {
        path: 'calendar',
        element: <div>calendar</div>,
      },
      {
        path: 'history',
        element: <div>history</div>,
      },
    ],
  },
]);

export default router;
