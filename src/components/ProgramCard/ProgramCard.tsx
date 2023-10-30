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
      {programList.map(program => (
        <ProgramCardItem key={program.id} program={program} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: inherit;
  display: flex;
  flex-drection: row;
  flex-wrap: wrap;
  gap: 64px 36px;
  padding-bottom: 36px;
`;

export default ProgramCard;
