import styled from 'styled-components';
import { RecommendDataType } from '@/types';
import RecommendCardItem from './RecommendCardItem';

const RecommendCard = ({ resultList }: { resultList: RecommendDataType[] }) => {
  return (
    <Container>
      {resultList.map(result => (
        <RecommendCardItem
          key={`${result.title}-${result.photoUrl}`}
          result={result}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: inherit;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 36px;
`;

export default RecommendCard;
