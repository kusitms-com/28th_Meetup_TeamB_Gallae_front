import { AxiosResponse } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import Cookies from 'js-cookie';

import Axios from '@/apis';
import { SetterOrUpdater } from 'recoil';
import { UserInfoType } from '@/types';

export const userLogin = async (
  userInput: { id: string; password: string },
  setUserInput: React.Dispatch<
    React.SetStateAction<{ id: string; password: string }>
  >,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  navigate: NavigateFunction,
  setUserInfo: SetterOrUpdater<UserInfoType>,
) => {
  try {
    const res = await Axios.post('/auth/login', null, {
      params: { loginId: userInput.id, loginPassword: userInput.password },
    });
    onLoginSuccess(res, setUserInfo);
    setUserInput({ id: '', password: '' });
    navigate('/');
  } catch (e) {
    // 비밀번호 불일치시 메시지
    setIsError(true);
    setTimeout(() => {
      setIsError(false);
    }, 4000);
    console.error(e);
  } finally {
    setUserInput(prev => ({ ...prev, password: '' }));
  }
};

export const onLoginSuccess = (
  res: AxiosResponse,
  setUserInfo: SetterOrUpdater<UserInfoType> | null,
) => {
  if (res) {
    const {
      accessToken,
      refreshToken,
      id,
      loginId,
      nickName,
      email,
      name,
      phoneNumber,
      imageUrl,
      role,
      profileImageUrl,
      registrationNum,
      birth,
      department,
    } = res?.data?.result;

    const currentTime = new Date();

    // header에 accessToken 세팅
    Axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    // refreshToken 쿠키에 저장
    Cookies.set('refreshToken', refreshToken, { expires: 1 });

    // localStroage에 토큰 만료시간 저장
    const expireTime = new Date(currentTime.getTime() + 1 * 60 * 60 * 1000);
    localStorage.setItem('expireToken', expireTime.toString());

    // 최초 로그인시 recoil에 유저 정보 저장
    if (setUserInfo) {
      setUserInfo({
        id,
        loginId,
        nickName,
        email,
        name,
        imageUrl,
        phoneNumber,
        role,
        profileImageUrl,
        registrationNum,
        birth,
        department,
      });
    }
  }
};
