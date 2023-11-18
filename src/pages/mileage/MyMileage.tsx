import { H0, H1 } from '@/style/fonts/StyledFonts';
import React from 'react';
import styled from 'styled-components';

const MyMileage: React.FC<{ point: number }> = ({ point }) => {
  return (
    <Container>
      <InnerContainer>
        <H1 $fontColor="#15191D">현재 보유 마일리지</H1>
        <H0 $fontColor="#FF7D2C">{point}P</H0>
      </InnerContainer>
    </Container>
  );
};

export default MyMileage;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1040px;
  height: 240px;
  flex-shrink: 0;

  border-radius: 30px;
  background: #f6f6f6;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 894px;
`;
