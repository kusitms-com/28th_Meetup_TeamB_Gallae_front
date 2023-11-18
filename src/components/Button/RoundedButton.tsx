import { B1Bold } from '@/style/fonts/StyledFonts';
import { ButtonStyleType } from '@/types';
import styled from 'styled-components';

interface ButtonProps extends ButtonStyleType {
  onClick?: () => void;
  children: React.ReactNode;
}

const RoundedButton = ({
  $buttonColor,
  $buttonWidth,
  $buttonHeight,
  $hoverTextColor,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <StyledButton
      $buttonColor={$buttonColor}
      $buttonWidth={$buttonWidth}
      $buttonHeight={$buttonHeight}
      $hoverTextColor={$hoverTextColor}
      onClick={onClick}
    >
      <div className="button-text">{children}</div>
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonStyleType>`
  border-radius: 40px;
  background-color: ${({ $buttonColor }) => $buttonColor};
  width: ${({ $buttonWidth }) => $buttonWidth};
  height: ${({ $buttonHeight }) => $buttonHeight};
  position: relative;

  &:hover {
    ${B1Bold} {
      color: ${({ $hoverTextColor }) => $hoverTextColor};
    }
  }

  .button-text {
    display: flex;
    width: min-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default RoundedButton;
