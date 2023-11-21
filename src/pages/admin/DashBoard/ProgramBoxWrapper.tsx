import FilterButton from '@/components/Button/FilterButton';
import styled from 'styled-components';
import Pagination from './Pagination';
import { DASHBOARD_FILTER } from '@/constants/Admin';

interface ProgramBoxProps {
  title: string;
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
}

const ProgramBoxWrapper = ({
  title,
  selectedFilter,
  setSelectedFilter,
  children,
  page,
  setPage,
}: ProgramBoxProps) => {
  return (
    <ProgramContainer>
      <div className="title">{title}</div>
      <ButtonContainer>
        {DASHBOARD_FILTER.map(item => (
          <FilterButton
            key={item}
            active={item === selectedFilter}
            handleClick={() => setSelectedFilter(item)}
          >
            {item}
          </FilterButton>
        ))}
      </ButtonContainer>
      {children}
      <Pagination currentPage={page} setPage={setPage} maxPage={5} />
    </ProgramContainer>
  );
};

export default ProgramBoxWrapper;

const ProgramContainer = styled.div`
  width: 1380px;
  padding: 40px;
  background-color: white;
  border-radius: 20px;

  .title {
    color: var(--color_gray900);
    font-family: SUIT-Bold;
    font-size: 24px;
    font-style: normal;
    line-height: 150%; /* 36px */
    margin-bottom: 32px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-bottom: 8px;
`;
