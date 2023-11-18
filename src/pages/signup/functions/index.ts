import {
  birthRegex,
  emailRegex,
  phoneRegex,
  registrationNumberRegex,
} from '@/constants/signup';
import { InputType } from '@/types';

export const CheckDuplicate = (keyName: string, value: string): boolean => {
  keyName;
  value;
  try {
    // 서버에 중복 검사 요청
    // 중복이면 true, 아니면 false
  } catch (error) {
    console.error(error);
  }
  return true;
};

export const checkIsOkToSignUp = (
  isGeneralUser: boolean,
  inputData: InputType,
): boolean => {
  // 회원 가입 양식에 맞게 입력했는지 확인
  switch (isGeneralUser) {
    case true:
      return (inputData?.name &&
        inputData?.birth &&
        inputData?.nickname &&
        inputData.nickname.length >= 2 &&
        inputData.nickname.length <= 20 &&
        inputData?.id &&
        inputData.id.length >= 2 &&
        inputData.id.length <= 20 &&
        inputData?.password &&
        inputData.password.length >= 6 &&
        inputData?.password === inputData?.repassword &&
        birthRegex.test(inputData.birth) &&
        phoneRegex.test(
          inputData?.phoneNumber ? inputData.phoneNumber : '010-1234-1234',
        ) &&
        emailRegex.test(
          inputData?.email ? inputData.email : 'travelmaker@kusitms.ac.kr',
        )) as boolean;
    case false:
      return (inputData?.name &&
        inputData?.registrationNumber &&
        inputData?.deptName &&
        inputData?.mgrName &&
        inputData?.id &&
        inputData.id.length >= 2 &&
        inputData.id.length <= 20 &&
        inputData?.password &&
        inputData.password.length >= 6 &&
        inputData?.password === inputData?.repassword &&
        registrationNumberRegex.test(inputData.registrationNumber) &&
        phoneRegex.test(
          inputData?.phoneNumber ? inputData.phoneNumber : '010-1234-1234',
        ) &&
        emailRegex.test(
          inputData?.email ? inputData.email : 'travelmaker@kusitms.ac.kr',
        )) as boolean;
  }
};
