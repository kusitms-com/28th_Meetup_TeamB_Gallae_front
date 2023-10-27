import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Main from './pages/main/Main';
import Map from './pages/map/Map';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'map',
        element: <Map />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={route} />;

export default App;
