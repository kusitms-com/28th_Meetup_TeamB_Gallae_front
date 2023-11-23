import { H3 } from '@/style/fonts/StyledFonts';
import { RecommendDataType } from '@/types';
import styled from 'styled-components';

const RecommendCardItem = ({ result }: { result: RecommendDataType }) => {
  return (
    <Container href={result.link}>
      <img className="image" alt="image" src={result.photoUrl} />
      <CardInfoContainer>
        <H3 $fontColor="var(--color_gray900)">{result.title}</H3>
      </CardInfoContainer>
    </Container>
  );
};

const Container = styled.a`
  width: 323px;
  height: max-content;
  position: relative;
  cursor: pointer;

  .image {
    width: 323px;
    height: 323px;
    border-radius: 20px;
    object-fit: cover;
  }
`;

const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-top: 16px;
  gap: 4px;
  width: inherit;

  ${H3} {
    width: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default RecommendCardItem;
