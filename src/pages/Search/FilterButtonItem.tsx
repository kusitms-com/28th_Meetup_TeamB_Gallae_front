import styled from 'styled-components';
import CalendarIcon from '@/assets/icons/calendar_icon.svg';
import { HiOutlineChevronDown } from 'react-icons/hi2';
import { B3 } from '@/style/fonts/StyledFonts';
import { FilterButtonSize, FilterListType } from '@/types';

interface FilterButtonStyle {
  $buttonSize: FilterButtonSize;
}

interface FilterButtonItemProps {
  filterItem: FilterListType;
  currentFilterTitle: string | null;
  isOpenFilterItem: boolean;
  setIsOpenFilterItem: (isOpen: boolean) => void;
}

const FilterButtonItem = ({
  filterItem,
  currentFilterTitle,
  isOpenFilterItem,
  setIsOpenFilterItem,
}: FilterButtonItemProps) => {
  return (
    <Container
      $buttonSize={filterItem.buttonSize}
      onClick={() => {
        if (filterItem.items.length > 0) setIsOpenFilterItem(!isOpenFilterItem);
        if (filterItem.calendar) setIsOpenFilterItem(!isOpenFilterItem);
      }}
    >
      <B3 $fontColor="var(--color_gray600)">{currentFilterTitle}</B3>
      {filterItem.calendar ? (
        <img alt="calendar-icon" src={CalendarIcon} />
      ) : (
        <HiOutlineChevronDown color="#666B6F" size="20px" />
      )}
    </Container>
  );
};

const Container = styled.div<FilterButtonStyle>`
  background-color: var(--color_background);
  display: flex;
  justify-content: space-between;
  padding: 9px 16px;
  align-items: center;
  border-radius: 40px;
  cursor: pointer;

  width: ${({ $buttonSize }) => $buttonSize === 'xs' && '123px'};
  width: ${({ $buttonSize }) => $buttonSize === 's' && '163px'};
  width: ${({ $buttonSize }) => $buttonSize === 'm' && '183px'};
  width: ${({ $buttonSize }) => $buttonSize === 'l' && '250px'};
`;

export default FilterButtonItem;
