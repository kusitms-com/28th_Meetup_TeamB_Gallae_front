import Loading from '@/components/Loading/Loading';
import RecommendCard from '@/components/RecommendCard/RecommendCard';
import { H1 } from '@/style/fonts/StyledFonts';
import { RecommendDataType } from '@/types';
import styled from 'styled-components';

interface RecommendSpotProps {
  resultList: RecommendDataType[];
  isLoading: boolean;
}

const RecommendSpot = ({ resultList, isLoading }: RecommendSpotProps) => {
  return (
    <Container>
      <H1 $fontColor="var(--color_gray900)">여행지 추천</H1>
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

export default RecommendSpot;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;
  margin-top: 130px;
  padding-bottom: 16px;
  text-align: left;
`;

const LoadingWrapper = styled.div`
  background-color: red;
  position: relative;
`;
