import Axios from '@/apis';
import {
  birthRegex,
  emailRegex,
  phoneRegex,
  registrationNumberRegex,
} from '@/constants/signup';
import { DupCheckType, InputType } from '@/types';

export const checkDuplicate = async (keyName: string, value: string) => {
  keyName;
  value;
  try {
    // 서버에 중복 검사 요청
    // 중복이면 true, 아니면 false
    if (keyName === 'nickName') {
      const res = await Axios.get('/users/checkNickname', {
        params: {
          NickName: value,
        },
      });
      return res?.data?.result as boolean;
    } else if (keyName === 'loginId') {
      const res = await Axios.get('/users/checkLoginId', {
        params: {
          loginId: value,
        },
      });
      return res?.data?.result as boolean;
    }
  } catch (error) {
    console.error(error);
  }
  return false;
};

export const checkIsOkToSignUp = (
  isGeneralUser: boolean,
  inputData: InputType,
  isDuplicated: DupCheckType,
): boolean => {
  // 회원 가입 양식에 맞게 입력했는지 확인
  switch (isGeneralUser) {
    case true:
      return (inputData?.name &&
        inputData?.birth &&
        inputData?.nickName &&
        inputData.nickName.length >= 2 &&
        inputData.nickName.length <= 20 &&
        !isDuplicated.nickName &&
        inputData?.loginId &&
        inputData.loginId.length >= 2 &&
        inputData.loginId.length <= 20 &&
        !isDuplicated.loginId &&
        inputData?.loginPw &&
        inputData.loginPw.length >= 6 &&
        inputData?.loginPw === inputData?.repassword &&
        birthRegex.test(inputData.birth) &&
        phoneRegex.test(
          inputData?.phoneNumber ? inputData.phoneNumber : '010-1234-1234',
        ) &&
        emailRegex.test(
          inputData?.email ? inputData.email : 'travelmaker@kusitms.ac.kr',
        )) as boolean;
    case false:
      return (inputData?.name &&
        inputData?.registNum &&
        inputData?.department &&
        inputData?.companyName &&
        inputData?.loginId &&
        inputData.loginId.length >= 2 &&
        inputData.loginId.length <= 20 &&
        !isDuplicated.loginId &&
        inputData?.loginPw &&
        inputData.loginPw.length >= 6 &&
        inputData?.loginPw === inputData?.repassword &&
        registrationNumberRegex.test(inputData.registNum) &&
        phoneRegex.test(
          inputData?.phoneNum ? inputData.phoneNum : '010-1234-1234',
        ) &&
        emailRegex.test(
          inputData?.email ? inputData.email : 'travelmaker@kusitms.ac.kr',
        )) as boolean;
  }
};
