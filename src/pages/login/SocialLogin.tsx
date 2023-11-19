import styled from 'styled-components';

import Naver from '@/assets/icons/icon-naver.svg';
import Kakao from '@/assets/icons/icon-kakao.svg';
import Google from '@/assets/icons/icon-google.svg';

const SocialLogin = () => {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY; //REST API KEY
  const REDIRECT_URI = `${window.location.origin}/kakao/login`; //REDIRECT URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    // 카카오 로그인 주소
    window.location.href = kakaoURL;
  };

  return (
    <SocialLoginContainer>
      {/* 네이버 로그인 */}
      <SocialLoginButton>
        <img src={Naver} alt="naver" />
      </SocialLoginButton>
      {/* 카카오 로그인 */}
      <SocialLoginButton onClick={handleKakaoLogin}>
        <img src={Kakao} alt="kakao" />
      </SocialLoginButton>
      {/* 구글 로그인 */}
      <SocialLoginButton>
        <img src={Google} alt="google" />
      </SocialLoginButton>
    </SocialLoginContainer>
  );
};

export default SocialLogin;

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
