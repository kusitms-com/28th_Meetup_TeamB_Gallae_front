import styled from 'styled-components';
import { H0 } from '@/style/fonts/StyledFonts';

const Introduce = () => {
  return (
    <Container>
      <H0 $fontColor="#15191D">
        {'많이 활동할수록\n마일리지가 더 많이 쌓여가요!'}
      </H0>
      <ImageWrapper>
        <img src="" alt="" />
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
  flex-shrink: 0;

  background: #f6f6f6;
`;
