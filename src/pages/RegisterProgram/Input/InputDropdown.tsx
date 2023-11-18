import styled from 'styled-components';

interface InputDropdownProps {
  field: string;
  dropdownItemList: string[];
  dropdownTitle: string;
  onDropdownClick: (field: string, item: string) => void;
}

const InputDropdown = ({
  field,
  dropdownItemList,
  dropdownTitle,
  onDropdownClick,
}: InputDropdownProps) => {
  return (
    <Container>
      <span>{dropdownTitle}</span>
      <hr />
      {dropdownItemList.map(item => (
        <span
          key={item}
          className={`dropdown-item ${dropdownTitle === item && 'active'}`}
          onClick={() => onDropdownClick(field, item)}
        >
          {item}
        </span>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 32px;
  border: 1px solid var(--color_gray500);
  padding: 20px 36px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  position: absolute;

  z-index: 1;

  hr {
    border-width: 1px;
    border-style: dashed;
    border-color: var(--color_gray400);
  }

  span {
    color: var(--color_gray400);
    font-family: SUIT-Medium;
    font-size: 18px;
    font-style: normal;
    line-height: 140%;
  }

  .dropdown-item {
    &:hover {
      color: var(--color_gray900);
    }
  }

  .active {
    color: var(--color_gray900);
  }
`;
export default InputDropdown;
