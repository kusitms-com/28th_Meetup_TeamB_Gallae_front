import { H2 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

const ProgramBody = ({ description }: { description: string }) => {
  return (
    <Container>
      <H2 $fontColor="var(--color_gray900)">상세내용</H2>
      <div className="description">
        <div className="description-text">{description}</div>
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
  width: inherit;

  .description-text {
    font-family: 'SUIT-Regular';
    font-size: 20px;
    line-height: 150%;
    color: var(--color_gray900);
    white-space: pre-wrap;
    //word-wrap: break-word;
  }
`;

export default ProgramBody;
