import styled from 'styled-components';
import { H0 } from '@/style/fonts/StyledFonts';
import Character from '@/assets/icons/icon-character.svg';

const Introduce = () => {
  return (
    <Container>
      <H0 $fontColor="#15191D">
        {'많이 활동할수록\n마일리지가 더 많이 쌓여가요!'}
      </H0>
      <ImageWrapper>
        <img src={Character} alt="character" />
      </ImageWrapper>
    </Container>
  );
};

export default Introduce;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1040px;
  flex-shrink: 0;
`;

const ImageWrapper = styled.div`
  width: 144px;
  height: 144px;
  border-radius: 50%;
  flex-shrink: 0;
  background: #f1f8ff;

  img {
    width: 100%;
    height: 100%;
  }
`;
