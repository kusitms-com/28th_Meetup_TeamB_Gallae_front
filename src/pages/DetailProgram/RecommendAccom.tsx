import RecommendCard from '@/components/RecommendCard/RecommendCard';
import { H1 } from '@/style/fonts/StyledFonts';
import { RecommendDataType } from '@/types';
import styled from 'styled-components';

interface RecommendAccomProps {
  resultList: RecommendDataType[];
}

const RecommendAccom = ({ resultList }: RecommendAccomProps) => {
  return (
    <Container>
      <H1 $fontColor="var(--color_gray900)">숙소 추천</H1>
      <RecommendCard resultList={resultList} />
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
