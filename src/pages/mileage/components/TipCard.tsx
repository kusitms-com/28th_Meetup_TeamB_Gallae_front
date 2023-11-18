import { TipData } from '@/constants/Mileage';
import { B2, H3 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

const TipCard: React.FC<{ index: number }> = ({ index }) => {
  return (
    <Container>
      <IconWrapper>
        <span>☝️</span>
      </IconWrapper>
      <H3 $fontColor="#000">{TipData[index].title}</H3>
      <TipContainer>
        {TipData[index].content.map(tip => (
          <li>
            <B2 $fontColor="#000">{tip}</B2>
          </li>
        ))}
      </TipContainer>
    </Container>
  );
};

export default TipCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 637px;
  padding: 46px 51px;
  flex-shrink: 0;

  border-radius: 30px;
  background: #f6f6f6;

  gap: 18px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 66px;
  height: 66px;
  flex-shrink: 0;

  background: #fff;
  border-radius: 50%;

  span {
    font-size: 48px;
  }
`;

const TipContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  > li {
    list-style: circle;
  }
`;
