import { HiOutlineChevronDown } from 'react-icons/hi2';
import styled from 'styled-components';
import InputDropdown from './InputDropdown';
import { useEffect, useRef, useState } from 'react';
import { INPUT_FIELD } from '@/constants/Register';

interface DefaultInputProps {
  field: string;
  dropdownItemList: string[];
  selectedLocation: string;
  onDropdownClick: (field: string, item: string) => void;
}

const DropdownInput = ({
  field,
  dropdownItemList,
  selectedLocation,
  onDropdownClick,
}: DefaultInputProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current?.contains(e.target as HTMLDivElement)
      ) {
        setIsOpenDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClose);
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  }, [isOpenDropdown]);

  return (
    <Container
      ref={dropdownRef}
      onClick={() => {
        if (dropdownItemList) setIsOpenDropdown(!isOpenDropdown);
      }}
    >
      <DropdownTitle $active={selectedLocation !== ''}>
        {selectedLocation === ''
          ? INPUT_FIELD[field].placeholder
          : selectedLocation}
      </DropdownTitle>
      <DropdownContainer>
        {isOpenDropdown && (
          <InputDropdown
            field={field}
            dropdownItemList={dropdownItemList}
            dropdownTitle={
              selectedLocation === ''
                ? INPUT_FIELD[field].placeholder
                : selectedLocation
            }
            onDropdownClick={onDropdownClick}
          />
        )}
      </DropdownContainer>
      <HiOutlineChevronDown
        className="dropdown-icon"
        color="#666B6F"
        size="20px"
      />
    </Container>
  );
};

const Container = styled.div`
  border-radius: 40px;
  position: relative;
  cursor: pointer;

  .dropdown-icon {
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translate(-50%, -50%);
  }
`;

const DropdownTitle = styled.div<{ $active: boolean }>`
  width: 100%;
  position: relative;
  border-radius: 40px;
  border: 1px solid var(--color_gray200);
  padding: 20px 36px;

  color: ${props =>
    props.$active ? 'var(--color_gray900)' : 'var(--color_gray400)'};
  font-family: SUIT-Medium;
  font-size: 18px;
  font-style: normal;
  line-height: 140%;
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export default DropdownInput;
