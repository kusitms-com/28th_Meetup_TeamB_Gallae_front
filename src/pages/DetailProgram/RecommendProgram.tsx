import ProgramCard from '@/components/ProgramCard/ProgramCard';
import { H1 } from '@/style/fonts/StyledFonts';
import { ProgramMainInfoType } from '@/types';
import styled from 'styled-components';

const RecommendProgram = ({
  programs,
}: {
  programs: ProgramMainInfoType[];
}) => {
  return (
    <Container>
      <H1 $fontColor="var(--color_gray900)">유사 지원 사업 추천</H1>
      <ProgramCard programList={programs} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;
  margin-top: 130px;
  text-align: left;
`;

export default RecommendProgram;
