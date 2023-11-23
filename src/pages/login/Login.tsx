import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { B2Bold, B3, H1 } from '@/style/fonts/StyledFonts';
import SocialLogin from './SocialLogin';
import LoginNavLink from './LoginNavLink';
import { userLogin } from './functions';
import { UserAtom } from '@/recoil/LoginAtom';

interface UserInputType {
  id: string;
  password: string;
}

const Login = () => {
  const [userInput, setUserInput] = useState<UserInputType>({
    id: '',
    password: '',
  });
  const [isError, setIsError] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useRecoilState(UserAtom);

  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 함수 호출
    userLogin(userInput, setUserInput, setIsError, navigate, setUserInfo);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') handleLogin();
  };

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(prev => ({ ...prev, id: e.target.value }));
  };

  const handleChangePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(prev => ({ ...prev, password: e.target.value }));
  };

  useEffect(() => {
    if (userInfo.loginId) {
      // 이미 로그인한 사용자가 들어가면 못 들어가게 방지
      navigate('/');
    }
  }, []);

  return (
    <Container>
      <Title>
        <H1 $fontColor="var(--gray-900, #15191D)">로그인</H1>
        <B3 $fontColor="var(--gray-600, #666B6F)">
          회원이 되시면 다양한 혜택과 서비스를 받으실 수 있습니다.
        </B3>
      </Title>

      <LoginContainer>
        {/* ID */}
        <Input
          placeholder="아이디"
          value={userInput.id}
          onChange={handleChangeId}
        />
        {/* Password */}
        <Input
          placeholder="비밀번호"
          type="password"
          value={userInput.password}
          onChange={handleChangePW}
          onKeyDown={handleKeyDown}
        />
        {isError && (
          <ErrorMessage>
            <B3 $fontColor="#F6505A">
              아이디 또는 비밀번호가 일치하지 않습니다.
            </B3>
          </ErrorMessage>
        )}
      </LoginContainer>
      <Button onClick={handleLogin}>
        <B2Bold $fontColor="#fff">로그인</B2Bold>
      </Button>

      {/* 소셜 로그인 */}
      <SocialLogin />
      {/* 네비게이션 */}
      <LoginNavLink />
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;

  width: 440px;
  gap: 40px;

  zoom: 1.33333;

  body:not(&) {
    background-color: white;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 268px;
  gap: 8px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;

  width: 100%;
  gap: 20px;
`;

const ErrorMessage = styled.div`
  position: absolute;
  bottom: -27px;
`;

const Input = styled.input`
  width: 100%;
  height: 56px;

  flex-shrink: 0;

  border: none;
  border-radius: 10px;
  background: var(--background, #f6f6f6);

  text-indent: 28px;

  /* Body 03 */
  font-family: 'SUIT-Medium';
  font-size: 16px;
  font-style: normal;
  line-height: 140%; /* 22.4px */

  color: '#15191D';

  &::placeholder {
    color: var(--gray-400, #aeb3b8);
  }
`;

const Button = styled.button`
  width: 440px;
  height: 60px;
  flex-shrink: 0;
  margin-top: 28px;

  border-radius: 10px;
  background: var(--Sub-3, #ff7d2c);
`;
