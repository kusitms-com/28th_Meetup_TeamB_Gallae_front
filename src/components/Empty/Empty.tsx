import { B2Bold } from '@/style/fonts/StyledFonts';
import React from 'react';
import styled from 'styled-components';

interface Props {
  noDataText: string;
  height: string;
}

const Empty: React.FC<Props> = ({ noDataText, height }) => {
  return (
    <Container height={height}>
      <B2Bold $fontColor="#aeb3b8">{noDataText}</B2Bold>
    </Container>
  );
};

export default Empty;

const Container = styled.table<{ height: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: ${({ height }) => height};
`;
