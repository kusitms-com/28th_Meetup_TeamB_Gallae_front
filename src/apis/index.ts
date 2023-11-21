import axios, { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { onLoginSuccess } from '@/pages/login/functions';

const Axios = axios.create();
const ServerURL = 'https://www.tvmaker.shop'; // 서버 URL
Axios.defaults.baseURL = ServerURL;
Axios.defaults.withCredentials = true;

// 요청 전 access 토큰 만료되었는지 확인
Axios.interceptors.request.use(
  async config => {
    const expireToken = localStorage.getItem('expireToken');
    const expireTime = expireToken
      ? new Date(expireToken as string)
      : undefined;
    const currentTime = new Date().getTime();
    const refreshToken = Cookies.get('refreshToken');

    if (expireTime && refreshToken) {
      // 이전에 로그인한 적이 있음
      if (currentTime > expireTime.getTime()) {
        // 만료되었으면
        const res = await axios.get(`${ServerURL}/auth/refresh`, {
          params: {
            refreshToken,
          },
        });
        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          res?.data?.result;

        // header에 accessToken 세팅
        Axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${newAccessToken}`;
        config.headers.Authorization = `Bearer ${newAccessToken}`;

        // 갱신된 만료 시간 localStorage에 저장
        const newExpireTime = new Date(currentTime + 1 * 60 * 60 * 1000); // 유효시간 1시간
        localStorage.setItem('expireToken', newExpireTime.toString());

        Cookies.remove('refreshToken');
        Cookies.set('refreshToken', newRefreshToken, { expires: 1 });
      }
    }
    return config;
  },
  error => Promise.reject(error),
);

// 응답 전 accessToken이 만료되어 발생한 에러라면 갈아끼우고 다시 요청
Axios.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response?.data?.code === 1001) {
      // 포인트가 부족한 상황
      if (window.confirm('포인트가 부족합니다')) {
        const currentPath = window.location.pathname;
        window.location.href = `${currentPath.substring(
          0,
          currentPath.lastIndexOf('/'),
        )}`;
      }
    }
    return response;
  },
  async error => {
    if (error.response?.status === 401) {
      // accessToken이 없어서 에러가 발생한 상황
      const refreshToken = Cookies.get('refreshToken');
      if (refreshToken) {
        // refreshToken이 있다면, 이미 로그인된 사용자이므로
        const res = await axios.get(`${ServerURL}/auth/refresh`, {
          params: { refreshToken },
        });
        // 기존에 있던 refreshToken은 지우고
        Cookies.remove('refreshToken');
        // 로그인 성공 로직 실행
        onLoginSuccess(res, null);
        return Axios(error.config);
      } else {
        // refreshToken이 없다는 건 로그인을 해야 한다는 것
        if (window.confirm('로그인이 필요한 서비스입니다.')) {
          window.location.href = '/login';
        }
      }
    }
    return error;
  },
);

export default Axios;
