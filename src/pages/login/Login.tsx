import { B2Bold, B3, H1 } from '@/style/fonts/StyledFonts';
import { useState } from 'react';
import styled from 'styled-components';

interface UserInputType {
  id: string;
  password: string;
}

const Login = () => {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY; //REST API KEY
  const REDIRECT_URI = `${window.location.origin}/kakao/login`; //REDIRECT URI

  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const [userInput, setUserInput] = useState<UserInputType>({
    id: '',
    password: '',
  });

  const handleKakaoLogin = () => {
    // 카카오 로그인 주소
    window.location.href = kakaoURL;
  };

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(prev => ({ ...prev, id: e.target.value }));
  };

  const handleChangePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(prev => ({ ...prev, password: e.target.value }));
  };

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
          value={userInput.password}
          onChange={handleChangePW}
        />
      </LoginContainer>

      <Button>
        <B2Bold $fontColor="#fff">로그인</B2Bold>
      </Button>

      <SocialLoginContainer>
        {/* 네이버 로그인 */}
        <SocialLoginButton>
          <img src="/src/assets/icons/icon-naver.svg" alt="naver" />
        </SocialLoginButton>
        {/* 카카오 로그인 */}
        <SocialLoginButton onClick={handleKakaoLogin}>
          <img src="/src/assets/icons/icon-kakao.svg" alt="kakao" />
        </SocialLoginButton>
        {/* 구글 로그인 */}
        <SocialLoginButton>
          <img src="/src/assets/icons/icon-google.svg" alt="google" />
        </SocialLoginButton>
      </SocialLoginContainer>
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

  width: 100%;
  gap: 20px;
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
  font-family: 'SUIT';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
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

  border-radius: 10px;
  background: var(--Sub-3, #ff7d2c);
`;

const SocialLoginContainer = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 16px;
`;

const SocialLoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;
  flex-shrink: 0;

  background: #f6f6f6;
  border-radius: 50%;

  cursor: pointer;
`;
