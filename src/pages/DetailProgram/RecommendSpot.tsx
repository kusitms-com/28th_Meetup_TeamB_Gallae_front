import RecommendCard from '@/components/RecommendCard/RecommendCard';
import { H1 } from '@/style/fonts/StyledFonts';
import { RecommendDataType } from '@/types';
import styled from 'styled-components';

interface RecommendSpotProps {
  resultList: RecommendDataType[];
}

const RecommendSpot = ({ resultList }: RecommendSpotProps) => {
  return (
    <Container>
      <H1 $fontColor="var(--color_gray900)">여행지 추천</H1>
      <RecommendCard resultList={resultList} />
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
