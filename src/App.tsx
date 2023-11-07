import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/main/Main';
import Map from './pages/map/Map';
import { GlobalStyle } from './style/GlobalStyle';
import Login from './pages/login/Login';
import KakaoRedir from './pages/login/KakaoRedir';
import Layout from './components/Header/Layout';
import Board from './pages/board/Board';
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
        path: 'review',
        element: (
          <Board
            title="지원후기"
            description="여행 지원사업/대외활동/공모전의 지원후기를 볼 수 있는 페이지입니다."
            imageSrc=""
          />
        ),
      },
      {
        path: 'detailProgram/:_programName/:_programId',
        element: <DetailProgram />,
      },
    ],
  },
]);

const App = () => (
  <>
    <GlobalStyle />
    <RouterProvider router={route} />
  </>
);

export default App;
