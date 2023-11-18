import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import { B2Bold, B3, H1 } from '@/style/fonts/StyledFonts';
import GeneralUser from './GeneralUser';
import Corporation from './Corporation';

import { InputType } from '@/types';
import Checked from '../../assets/icons/icon-checked.svg';
import Unchecked from '../../assets/icons/icon-unchecked.svg';
import SignUpButton from './components/SignUpButton';
import { checkIsOkToSignUp } from './functions';

const SignUp = () => {
  const [isGeneralUser, setIsGeneralUser] = useState<boolean>(true); // 일반회원 vs 기업회원
  const [isOk, setIsOk] = useState<boolean>(false); // 회원가입 입력 형식에 맞게 입력했는지 확인하는 state (해당 state를 이용해서 회원가입 버튼 disabled)
  const [inputData, setInputData] = useState<InputType>({}); // 입력 데이터를 모두 저장하는 state
  const [profile, setProfile] = useState<File | null>(null); // 프로필 이미지 File을 저장하는 state

  const handleClickCheckBox = useCallback((val: boolean) => {
    setIsGeneralUser(val);
    setInputData({});
    setProfile(null);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [isGeneralUser]);

  useEffect(() => {
    setIsOk(checkIsOkToSignUp(isGeneralUser, inputData));
  }, [inputData]);

  return (
    <Container>
      {/* 공통 부분 */}
      <Title>
        <H1 $fontColor="#15191D">회원가입</H1>
        <B3 $fontColor="#666B6F">
          회원이 되시면 다양한 혜택과 서비스를 받을 수 있습니다.
        </B3>
      </Title>
      <CheckBoxContainer>
        <CheckBox>
          <B2Bold $fontColor="#15191D">일반회원</B2Bold>
          {isGeneralUser ? (
            <img src={Checked} />
          ) : (
            <img src={Unchecked} onClick={() => handleClickCheckBox(true)} />
          )}
        </CheckBox>
        <CheckBox>
          <B2Bold $fontColor="#15191D">기업회원</B2Bold>
          {isGeneralUser ? (
            <img src={Unchecked} onClick={() => handleClickCheckBox(false)} />
          ) : (
            <img src={Checked} />
          )}
        </CheckBox>
      </CheckBoxContainer>

      {/* 입력받는 부분 */}
      <InputContainer>
        {isGeneralUser ? (
          <GeneralUser
            inputData={inputData}
            setInputData={setInputData}
            profile={profile}
            setProfile={setProfile}
          />
        ) : (
          <Corporation
            inputData={inputData}
            setInputData={setInputData}
            profile={profile}
            setProfile={setProfile}
          />
        )}
      </InputContainer>

      {/* 회원가입 버튼 */}
      <SignUpButton isOkToSubmit={isOk} />
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 1440px;
  margin: 229px auto 128px;
  zoom: 1.33333;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;
`;

const CheckBoxContainer = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 48px;
  margin: 48px 0 80px;
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    cursor: pointer;
  }
`;

const InputContainer = styled.div`
  width: 864px;
  margin: 0 auto 112px;
`;
