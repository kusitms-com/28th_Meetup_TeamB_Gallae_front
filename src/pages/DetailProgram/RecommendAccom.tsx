import Loading from '@/components/Loading/Loading';
import RecommendCard from '@/components/RecommendCard/RecommendCard';
import { H1 } from '@/style/fonts/StyledFonts';
import { RecommendDataType } from '@/types';
import styled from 'styled-components';

interface RecommendAccomProps {
  resultList: RecommendDataType[];
  isLoading: boolean;
}

const RecommendAccom = ({ resultList, isLoading }: RecommendAccomProps) => {
  return (
    <Container>
      <H1 $fontColor="var(--color_gray900)">숙소 추천</H1>
      {isLoading ? (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      ) : (
        <RecommendCard resultList={resultList} />
      )}
    </Container>
  );
};

export default RecommendAccom;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;
  margin-top: 80px;
  margin-bottom: 193px;
  text-align: left;
`;

const LoadingWrapper = styled.div`
  background-color: red;
  position: relative;
`;
