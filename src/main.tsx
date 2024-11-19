import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.tsx';
import Error from './pages/Error.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Contact from './pages/Contact.tsx';
import Resume from './pages/Resume.tsx';
import Projects from './pages/Projects.tsx';
import Code from './pages/Code.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
      {
        path: 'Portfolio',
        element: <Portfolio />,
      },
      {
        path: 'Resume',
        element: <Resume />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
      {
        path: 'Projects',
        element: <Projects />,
      },
      {
        path: 'Code',
        element: <Code />,
      },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
