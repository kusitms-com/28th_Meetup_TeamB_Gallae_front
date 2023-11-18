import styled from 'styled-components';
import DropdownInput from '../Input/DropdownInput';
import FieldTitle from './FieldTitle';
import { B4 } from '@/style/fonts/StyledFonts';
import { ProgramRegisterInfoType } from '@/types';
import { INPUT_FIELD, LOCATION_LIST } from '@/constants/Register';

interface DropdownInputProps {
  title: string;
  programContent: ProgramRegisterInfoType;
  onDropdownClick: (field: string, item: string) => void;
  isPossibleSubmit: boolean;
}

const DropdownInputField = ({
  title,
  programContent,
  onDropdownClick,
  isPossibleSubmit,
}: DropdownInputProps) => {
  return (
    <InnerContainer>
      <TitleContainer>
        <FieldTitle field={INPUT_FIELD[title].title} />
      </TitleContainer>
      <InputContainer>
        <DropdownInput
          field={title}
          dropdownItemList={LOCATION_LIST}
          selectedLocation={programContent[title]}
          onDropdownClick={onDropdownClick}
        />
        <B4
          $fontColor={
            !isPossibleSubmit && programContent[title] === ''
              ? 'red'
              : 'transparent'
          }
        >
          {INPUT_FIELD[title].alertMessage}
        </B4>
      </InputContainer>
    </InnerContainer>
  );
};

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${B4} {
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;

export default DropdownInputField;
