import styled from 'styled-components';
import { B2Bold } from '@/style/fonts/StyledFonts';

const SignUpButton: React.FC<{
  isOkToSubmit: boolean;
  handleClick: () => void;
}> = ({ isOkToSubmit, handleClick }) => {
  return (
    <Button
      isOkToSubmit={isOkToSubmit}
      disabled={!isOkToSubmit}
      onClick={handleClick}
    >
      <B2Bold $fontColor="#fff">회원가입</B2Bold>
    </Button>
  );
};

export default SignUpButton;

const Button = styled.button<{ isOkToSubmit: boolean }>`
  width: 784px;
  height: 60px;
  flex-shrink: 0;

  border-radius: 10px;
  background: ${({ isOkToSubmit }) =>
    isOkToSubmit ? 'var(--Sub-3, #FF7D2C)' : 'var(--grey-300, #d2d7dc)'};

  pre {
    color: #fff;
  }
`;
