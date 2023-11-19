import { useQuery } from 'react-query';
import styled from 'styled-components';

import { B1, H0, H1 } from '@/style/fonts/StyledFonts';
import HotProgramCard from './components/HotProgramCard';
import { ProgramMainInfoType } from '@/types';
import { fetchHotProgram } from '@/apis/main';
import Loading from '@/components/Loading/Loading';

const HotProgram = () => {
  const { data, isLoading } = useQuery(['hotPrograms'], fetchHotProgram(), {
    cacheTime: 500000,
    staleTime: 500005,
  });

  const hotPrograms: ProgramMainInfoType[] = data?.data?.result;

  return (
    <Container>
      {isLoading && <Loading />}
      <TextContainer>
        <H1 $fontColor="#F6505A">HOT</H1>
        <FlexContainer>
          <H0 $fontColor="#15191D">지금 가장 인기있는</H0>
          <H0 $fontColor="#15191D">프로그램</H0>
        </FlexContainer>
        <FlexContainer>
          <B1 $fontColor="#666B6F">많은 사람들이 관심을 가지고 있어요.</B1>
          <B1 $fontColor="#666B6F">마감이 되기 전에 지원해보세요!</B1>
        </FlexContainer>
      </TextContainer>
      <ProgramCardContainer>
        {hotPrograms &&
          hotPrograms.map(program => (
            <HotProgramCard key={program.id} {...program} />
          ))}
      </ProgramCardContainer>
    </Container>
  );
};

export default HotProgram;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  width: 1440px;
  margin: 0 auto 260px;
`;

const TextContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 24px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ProgramCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 800px;
  gap: 16px;

  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
