import { B3 } from '@/style/fonts/StyledFonts';
import { FilterInputType, FilterListType } from '@/types';
import styled from 'styled-components';

interface FilterItemProps {
  filterItem: FilterListType;
  currentFilterTitle: string | null;
  setCurrentFilterTitle: (title: string) => void;
  filterInput: FilterInputType;
  setFilterInput: (input: FilterInputType) => void;
  setIsOpenFilterItem: (isOpen: boolean) => void;
}
const FilterItem = ({
  filterItem,
  currentFilterTitle,
  setCurrentFilterTitle,
  filterInput,
  setFilterInput,
  setIsOpenFilterItem,
}: FilterItemProps) => {
  return (
    <Container>
      {filterItem.items.map(item => (
        <div
          key={item}
          className="filter-item"
          onClick={() => {
            setCurrentFilterTitle(item);
            setFilterInput({ ...filterInput, [filterItem.enTitle]: item });
            setIsOpenFilterItem(false);
          }}
        >
          <B3
            $fontColor={
              currentFilterTitle === item ? 'black' : 'var(--color_gray500)'
            }
            $hoverColor="black"
          >
            {item}
          </B3>
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  padding: 3px 0px;
  margin-top: 12px;
  text-align: left;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);

  .filter-item {
    margin: 18px 21px;
    cursor: pointer;
  }
`;

export default FilterItem;
