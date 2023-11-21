import styled from 'styled-components';
import { ProgramMainInfoType } from '@/types';
import ProgramCardItem from './ProgramCardItem';

const ProgramCard = ({
  programList,
}: {
  programList: ProgramMainInfoType[];
}) => {
  return (
    <Container>
      {programList &&
        programList.length > 0 &&
        programList.map((program, index) => (
          <ProgramCardItem key={`${program.id}-${index}`} program={program} />
        ))}
    </Container>
  );
};

const Container = styled.div`
  width: inherit;
  display: flex;
  flex-direction: row;
  //justify-content: space-between;
  flex-wrap: wrap;
  gap: 64px 36px;
  padding-bottom: 36px;
`;

export default ProgramCard;
