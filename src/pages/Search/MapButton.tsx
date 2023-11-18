import RoundedButton from '@/components/Button/RoundedButton';
import MapIcon from '@/assets/icons/map_icon.svg';
import { B1Bold } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

const MapButton = () => {
  return (
    <Container>
      <RoundedButton
        $buttonColor="var(--color_sub3)"
        $buttonWidth="222px"
        $buttonHeight="70px"
        onClick={() => console.log('이동')}
      >
        <ButtonTextContainer>
          <B1Bold $fontColor="white">지도에서 보기</B1Bold>
          <img alt="map-icon" src={MapIcon} />
        </ButtonTextContainer>
      </RoundedButton>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  left: 50%;
  bottom: 75px;
  transform: translate(-50%, -50%);
`;

const ButtonTextContainer = styled.div`
  display: flex;
  flex-direction: row;

  img {
    margin-left: 8px;
  }
`;

export default MapButton;
