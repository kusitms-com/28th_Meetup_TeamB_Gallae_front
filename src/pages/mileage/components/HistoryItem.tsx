import { B2, B2Bold } from '@/style/fonts/StyledFonts';
import { MileageHistoryType } from '@/types';
import React from 'react';
import styled from 'styled-components';

const HistoryItem: React.FC<MileageHistoryType> = ({
  date, // 날짜
  time, // 시간
  type, // 분류
  detail, // 활동 내역
  usage, // 사용 내역
}) => {
  return (
    <Container>
      <DateTimeContainer>
        <B2 $fontColor="#15191D" style={{ width: '99px' }}>
          {date}
        </B2>
        <B2 $fontColor="#15191D" style={{ width: '45px' }}>
          {time}
        </B2>
      </DateTimeContainer>
      <B2 $fontColor="#15191D" style={{ width: '32px' }}>
        {type}
      </B2>
      <Detail>
        <B2 $fontColor="#15191D">{detail}</B2>
      </Detail>
      <B2Bold
        $fontColor={usage > 0 ? '#15191D' : '#F6505A'}
        style={{ width: '56px' }}
      >
        {usage}P
      </B2Bold>
    </Container>
  );
};

export default HistoryItem;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  padding: 24px 54px;

  border-bottom: 0.5px solid var(--grey-200, #e3e7ed);
`;

export const DateTimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 40px;
`;

const Detail = styled.div`
  width: 160px;

  pre {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
