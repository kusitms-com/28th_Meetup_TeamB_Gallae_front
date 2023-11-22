import { B1 } from '@/style/fonts/StyledFonts';
import { useState } from 'react';
import styled from 'styled-components';
import { HiOutlineChevronDown } from 'react-icons/hi2';

interface Props {
  placeholder: string;
  dropdownList: string[];
  selected: string;
  size: string;
  position: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const DropDown: React.FC<Props> = ({
  placeholder,
  dropdownList, // 선택지 리스트
  selected, // 선택된 dropdown을 관리하는 state
  size, // dropdown의 사이즈를 조절
  position = 'relative', // 드롭다운 목록의 position을 absolute로 할지 relative로 할지
  setSelected,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(prev => !prev);
  };
  const handleClickItem = (item: string) => {
    setSelected(item);
  };
  return (
    <Container
      onClick={handleClick}
      padding={size === 'sm' ? '9px 16px 9px 20px' : '23px 40px'}
    >
      <FlexBox>
        <B1 $fontColor={selected ? '#17181a' : '#AEB3B8'}>
          {selected ? selected : placeholder}
        </B1>
        {!isOpen && <HiOutlineChevronDown size="20px" />}
      </FlexBox>
      {isOpen && (
        <DropDownContainer
          position={position}
          padding={size === 'sm' ? '16px 20px' : '23px 40px'}
        >
          {position === 'relative' && <Divider />}
          {dropdownList.map((dropdown, idx) => (
            <ItemWrapper key={idx} onClick={() => handleClickItem(dropdown)}>
              <B1 $fontColor="#AEB3B8">{dropdown}</B1>
            </ItemWrapper>
          ))}
        </DropDownContainer>
      )}
    </Container>
  );
};

export default DropDown;

const Container = styled.div<{ padding: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  position: relative;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid var(--grey-200, #e3e7ed);
  background: var(--main_1, #fff);
  padding: ${({ padding }) => padding};
  cursor: pointer;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const DropDownContainer = styled.div<{ position: string; padding: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: ${({ position }) => position};
  width: 100%;
  gap: 20px;

  background: #fff;
  padding: ${({ padding, position }) =>
    position === 'absolute' ? padding : '0'};
  ${({ position }) => {
    if (position === 'absolute')
      return `border-radius: 20px;
              border: 1px solid var(--grey-200, #e3e7ed);
              top: 50px;
              left: 0;
              `;
  }}
`;

const ItemWrapper = styled.div`
  width: 100%;
  pre {
    &:hover {
      color: #15191d;
      cursor: pointer;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 20px;
  border-bottom: 1px dashed #aeb3b8;
`;
