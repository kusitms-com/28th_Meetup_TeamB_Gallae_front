import ProgramBoxWrapper from './ProgramBoxWrapper';
import ProgramTable from './ProgramTable';
import { ProgramManagingType } from '@/types';

interface ProgramBoxProps {
  title: string;
  noDataText: string;
  programList: ProgramManagingType[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
  filter: string;
  setFilter: (filter: string) => void;
}

const ProgramBox = ({
  title,
  noDataText,
  programList,
  page,
  setPage,
  totalPage,
  filter,
  setFilter,
}: ProgramBoxProps) => {
  return (
    <ProgramBoxWrapper
      title={title}
      selectedFilter={filter}
      setSelectedFilter={setFilter}
      page={page}
      setPage={setPage}
      totalPage={totalPage}
    >
      <ProgramTable noDataText={noDataText} programList={programList} />
    </ProgramBoxWrapper>
  );
};

export default ProgramBox;
