import { InputType } from '@/types';
import Axios from '..';
import { NavigateFunction } from 'react-router-dom';

export const postSignup = async (
  isGeneralUser: boolean,
  inputData: InputType,
  profile: File | null,
  navigate: NavigateFunction,
) => {
  const postData = {
    ...inputData,
    birth: inputData?.birth?.split('.').join('-'),
    profileImage: profile,
  };

  try {
    switch (isGeneralUser) {
      case true:
        const res = await Axios.post('/users/register/user', postData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (
          res?.data?.code === 200 &&
          window.confirm('회원가입이 완료되었습니다!')
        )
          navigate('/login');
        break;
      case false:
        break;
    }
  } catch (e) {
    console.error(e);
  }
};
