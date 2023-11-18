import RoundedButton from '@/components/Button/RoundedButton';
import { B1Bold } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

const BUTTON_WIDTH = '190px';
const BUTTON_HEIGHT = '54px';
const BUTTON_HOVER_COLOR = 'rgba(255, 255, 255, 0.70)';

interface ButtonListProps {
  handleCancel: () => void;
  handleRegister: () => void;
  handleDraft: () => void;
}

const ButtonList = ({
  handleCancel,
  handleRegister,
  handleDraft,
}: ButtonListProps) => {
  return (
    <Container>
      <RoundedButton
        $buttonColor="var(--color_gray400)"
        $buttonHeight={BUTTON_HEIGHT}
        $buttonWidth={BUTTON_WIDTH}
        $hoverTextColor={BUTTON_HOVER_COLOR}
        onClick={handleCancel}
      >
        <B1Bold $fontColor="white">취소</B1Bold>
      </RoundedButton>
      <RoundedButton
        $buttonColor="var(--color_main1)"
        $buttonHeight={BUTTON_HEIGHT}
        $buttonWidth={BUTTON_WIDTH}
        $hoverTextColor={BUTTON_HOVER_COLOR}
        onClick={handleRegister}
      >
        <B1Bold $fontColor="white">등록</B1Bold>
      </RoundedButton>
      <RoundedButton
        $buttonColor="var(--color_sub3)"
        $buttonHeight={BUTTON_HEIGHT}
        $buttonWidth={BUTTON_WIDTH}
        $hoverTextColor={BUTTON_HOVER_COLOR}
        onClick={handleDraft}
      >
        <B1Bold $fontColor="white">임시 저장</B1Bold>
      </RoundedButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 48px;
`;

export default ButtonList;
