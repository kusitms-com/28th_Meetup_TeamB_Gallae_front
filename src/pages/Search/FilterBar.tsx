import FilterButtonList from './FilterButtonList';
import MainButton from '@/components/Button/MainButton';
import { FILTER_LIST } from '@/constants/Search';
import { B2Bold } from '@/style/fonts/StyledFonts';
import { FilterInputType, FilterListType } from '@/types';
import { useState } from 'react';
import styled from 'styled-components';

interface FilterBarProps {
  filterInput: FilterInputType;
  setFilterInput: (input: FilterInputType) => void;
  handleSubmit: () => void;
}

const FilterBar = ({
  filterInput,
  setFilterInput,
  handleSubmit,
}: FilterBarProps) => {
  const [filterList, setFilterList] = useState<FilterListType[]>(FILTER_LIST);

  return (
    <Container>
      <FilterButtonContainer>
        {filterList.map(filterItem => (
          <FilterButtonList
            key={filterItem.title}
            filterList={filterList}
            filterItem={filterItem}
            setFilterList={setFilterList}
            filterInput={filterInput}
            setFilterInput={setFilterInput}
          />
        ))}
      </FilterButtonContainer>
      <MainButton
        $buttonColor="var(--color_sub3)"
        $buttonWidth="112px"
        $buttonHeight="40px"
        onClick={handleSubmit}
      >
        <B2Bold $fontColor="white">선택</B2Bold>
      </MainButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 34px;
  padding: 40px 0px;
  margin-bottom: 64px;
  position: absolute;
  z-index: 1;
`;

const FilterButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export default FilterBar;
