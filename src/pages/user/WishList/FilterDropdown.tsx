import { B3 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

interface FilterDropdownProps {
  filterItemTitle: string;
  filterItemInput: string;
  dropdownList: string[];
  buttonWidth: number;
  handleChangeFilterInput: (itemTitle: string, itemInput: string) => void;
  setIsOpenDropdown: (isOpen: boolean) => void;
}

const FilterDropdown = ({
  filterItemTitle,
  filterItemInput,
  dropdownList,
  buttonWidth,
  handleChangeFilterInput,
  setIsOpenDropdown,
}: FilterDropdownProps) => {
  return (
    <Container $buttonWidth={buttonWidth}>
      {dropdownList.map(item => (
        <div
          key={item}
          className="filter-item"
          onClick={() => {
            handleChangeFilterInput(filterItemTitle, item);
            setIsOpenDropdown(false);
          }}
        >
          <B3
            $fontColor={
              filterItemInput === item ? 'black' : 'var(--color_gray500)'
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

export default FilterDropdown;

const Container = styled.div<{ $buttonWidth: number }>`
  background-color: white;
  padding: 3px 0px;
  margin-top: 12px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  position: absolute;
  width: ${props => props.$buttonWidth && `${props.$buttonWidth}px`};

  .filter-item {
    margin: 18px 21px;
    cursor: pointer;
  }
`;
