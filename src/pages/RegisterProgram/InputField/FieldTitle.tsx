import { B1Bold } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

const FieldTitle = ({ field }: { field: string }) => {
  return (
    <Container>
      <B1Bold $fontColor="var(--color_gray900)">{field}</B1Bold>
      <B1Bold $fontColor="#ff0808">*</B1Bold>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  width: 144px;
  margin-bottom: 28px;
`;

export default FieldTitle;
