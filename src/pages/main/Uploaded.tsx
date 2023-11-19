import { useQuery } from 'react-query';
import styled from 'styled-components';

import { H1 } from '@/style/fonts/StyledFonts';
import { ProgramMainInfoType } from '@/types';
import ProgramCard from '@/components/ProgramCard/ProgramCard';
import Loading from '@/components/Loading/Loading';
import { fetchRecentProgram } from '@/apis/main';

const Uploaded = () => {
  const { data, isLoading } = useQuery(
    ['recentPrograms'],
    fetchRecentProgram(),
    {
      cacheTime: 500000,
      staleTime: 500005,
    },
  );

  const programs: ProgramMainInfoType[] = data?.data?.result;

  return (
    <Container>
      {isLoading && <Loading />}
      <H1 $fontColor="#15191D" style={{ alignSelf: 'flex-start' }}>
        최신 업로드된 프로그램
      </H1>
      <ProgramContainer>
        {programs && <ProgramCard programList={programs} />}
      </ProgramContainer>
    </Container>
  );
};

export default Uploaded;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  width: 1440px;
  margin: 44px auto 0;

  gap: 64px;
`;

const ProgramContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  flex-wrap: wrap;
`;
