import { B3 } from '@/style/fonts/StyledFonts';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginNavLink = () => {
  return (
    <Container>
      <Link to={'/signup'}>
        <B3 $fontColor="#666B6F">회원가입</B3>
      </Link>
      <Divider />
      <B3 $fontColor="#666B6F">아이디 찾기</B3>
      <Divider />
      <B3 $fontColor="#666B6F">비밀번호 찾기</B3>
    </Container>
  );
};

export default LoginNavLink;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 21px;
`;

const Divider = styled.div`
  width: 1px;
  height: 20px;
  background: var(--gray-300, #d2d7dc);
`;
