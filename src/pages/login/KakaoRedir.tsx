import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KakaoRedir = () => {
  // 카카오 로그인시 방문되는 Redirect 컴포넌트
  const navigate = useNavigate();

  useEffect(() => {
    // const code = new URL(window.location.href).searchParams.get('code');
    // console.log(code);
    // 서버로 POST 하는 부분
    navigate('/'); // POST 성공시 메인 화면으로 이동
  }, []);

  return <div>로그인 중입니다</div>;
};

export default KakaoRedir;
