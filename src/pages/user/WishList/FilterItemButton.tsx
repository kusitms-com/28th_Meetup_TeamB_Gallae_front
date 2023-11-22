import { B3 } from '@/style/fonts/StyledFonts';
import { HiOutlineChevronDown } from 'react-icons/hi2';
import styled from 'styled-components';

interface FilterItemButtonProps {
  filterItemTitle: string;
  filterItemInput: string;
  buttonWidth: number;
  isOpenDropdown: boolean;
  setIsOpenDropdown: (isOpen: boolean) => void;
}

const FilterItemButton = ({
  filterItemTitle,
  filterItemInput,
  buttonWidth,
  isOpenDropdown,
  setIsOpenDropdown,
}: FilterItemButtonProps) => {
  return (
    <Container
      $buttonWidth={buttonWidth}
      onClick={() => {
        setIsOpenDropdown(!isOpenDropdown);
      }}
    >
      <B3 $fontColor="var(--color_gray600)">
        {filterItemInput === '' ? filterItemTitle : filterItemInput}
      </B3>
      <HiOutlineChevronDown color="#666B6F" size="20px" />
    </Container>
  );
};

export default FilterItemButton;

const Container = styled.div<{ $buttonWidth: number }>`
  background-color: var(--color_background);
  display: flex;
  justify-content: space-between;
  padding: 9px 16px 9px 20px;
  align-items: center;
  border-radius: 40px;
  cursor: pointer;
  width: ${props => props.$buttonWidth && `${props.$buttonWidth}px`};
`;
