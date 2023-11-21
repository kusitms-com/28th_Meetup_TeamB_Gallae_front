import { B4 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

const AuthBadge = () => {
  return (
    <Wrapper>
      <B4 $fontColor="var(--color_sub2)">인증완료</B4>
    </Wrapper>
  );
};

export default AuthBadge;

const Wrapper = styled.div`
  background-color: #ffeccf;
  padding: 4px 16px;
  border-radius: 20px;
`;
