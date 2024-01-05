import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './reset.css';
import './global.css';

const root = createRoot(document.getElementById('root')!);
root.render(<RouterProvider router={router} />);
