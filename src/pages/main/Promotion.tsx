import { H0 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

const Promotion = () => {
  return (
    <Container>
      <TextContainer>
        <H0 $fontColor="#15191D">갈래마다 다른 세상, 여행의 색깔을 찾다</H0>
        <FlexBox>
          <H0 $fontColor="#15191D">갈래로</H0>
          <H0 $fontColor="#FFA63E"> 더 특별한 여행</H0>
          <H0 $fontColor="#15191D">을 만나보세요.</H0>
        </FlexBox>
      </TextContainer>
    </Container>
  );
};

export default Promotion;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 560px;
  flex-shrink: 0;

  background: var(--background, #f6f6f6);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
