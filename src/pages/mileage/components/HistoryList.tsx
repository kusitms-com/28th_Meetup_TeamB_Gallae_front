import { B2 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';
import HistoryItem, { DateTimeContainer } from './HistoryItem';
import { MileageHistoryType } from '@/types';

const HistoryList: React.FC<{ histories: MileageHistoryType[] }> = ({
  histories,
}) => {
  return (
    <Container>
      <TitleContainer>
        <DateTimeContainer>
          <B2 $fontColor="#15191D" style={{ width: '99px' }}>
            날짜
          </B2>
          <B2 $fontColor="#15191D" style={{ width: '45px' }}>
            시간
          </B2>
        </DateTimeContainer>
        <B2 $fontColor="#15191D" style={{ width: '32px' }}>
          분류
        </B2>
        <B2 $fontColor="#15191D" style={{ width: '160px' }}>
          활동 내역
        </B2>
        <B2 $fontColor="#15191D" style={{ width: '56px' }}>
          적립 내역
        </B2>
      </TitleContainer>
      {histories &&
        histories.map(history => <HistoryItem {...history} key={history.id} />)}
    </Container>
  );
};

export default HistoryList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  padding: 24px 54px;

  border-bottom: 0.5px solid var(--grey-400, #aeb3b8);
`;
