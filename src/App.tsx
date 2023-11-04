import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Main from './pages/main/Main';
import Map from './pages/map/Map';
import { GlobalStyle } from './style/GlobalStyle';
import Login from './pages/login/Login';
import KakaoRedir from './pages/login/KakaoRedir';
import Layout from './components/Header/Layout';
import DetailProgram from './pages/DetailProgram';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'map',
        element: <Map />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'kakao/login',
        element: <KakaoRedir />,
      },
      {
        path: 'detailProgram/:_programName/:_programId',
        element: <DetailProgram />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <RouterProvider router={route} />
  </QueryClientProvider>
);

export default App;
