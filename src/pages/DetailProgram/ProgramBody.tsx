import { B1, H2 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

const ProgramBody = ({ description }: { description: string }) => {
  return (
    <Container>
      <H2 $fontColor="var(--color_gray900)">상세내용</H2>
      <div className="description">
        <B1 $fontColor="var(--color_gray900)">{description}</B1>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 95px 0px;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 56px;
`;

export default ProgramBody;
