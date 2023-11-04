import { ButtonStyleType } from '@/types';
import styled from 'styled-components';

interface ButtonProps extends ButtonStyleType {
  children: React.ReactNode;
}

const MainButton = ({
  $buttonColor,
  $buttonWidth,
  $buttonHeight,
  children,
}: ButtonProps) => {
  return (
    <StyledButton
      $buttonColor={$buttonColor}
      $buttonWidth={$buttonWidth}
      $buttonHeight={$buttonHeight}
    >
      <div className="button-text">{children}</div>
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonStyleType>`
  border-radius: 10px;
  background-color: ${({ $buttonColor }) => $buttonColor};
  width: ${({ $buttonWidth }) => $buttonWidth};
  height: ${({ $buttonHeight }) => $buttonHeight};
  position: relative;

  .button-text {
    display: flex;
    width: min-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default MainButton;
