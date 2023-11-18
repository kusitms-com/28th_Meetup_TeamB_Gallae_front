import styled from 'styled-components';
import FieldTitle from './FieldTitle';
import { B4 } from '@/style/fonts/StyledFonts';
import { INPUT_FIELD, SUB_CATEGORY_LIST } from '@/constants/Register';
import { ProgramRegisterInfoType } from '@/types';
import DropdownInput from '../Input/DropdownInput';

// 어느 정도 정리 완료
interface DefaultInputProps {
  mainTitle: string;
  subTitle: string;
  programContent: ProgramRegisterInfoType;
  onDropdownClick: (field: string, item: string) => void;
  isPossibleSubmit: boolean;
}

const CategoryInputField = ({
  mainTitle,
  subTitle,
  programContent,
  onDropdownClick,
  isPossibleSubmit,
}: DefaultInputProps) => {
  return (
    <InnerContainer>
      <TitleContainer>
        <FieldTitle field={INPUT_FIELD[mainTitle].title} />
      </TitleContainer>
      <InputContainer>
        <div className="input-container">
          <DropdownInput
            field={mainTitle}
            dropdownItemList={Object.keys(SUB_CATEGORY_LIST)}
            selectedLocation={programContent[mainTitle]}
            onDropdownClick={onDropdownClick}
          />
          <DropdownInput
            field={subTitle}
            dropdownItemList={SUB_CATEGORY_LIST[programContent[mainTitle]]}
            selectedLocation={programContent[subTitle]}
            onDropdownClick={onDropdownClick}
          />
        </div>
        <B4
          $fontColor={
            !isPossibleSubmit &&
            (programContent[mainTitle] === '' ||
              programContent[subTitle] === '')
              ? 'red'
              : 'transparent'
          }
        >
          {INPUT_FIELD[mainTitle].alertMessage}
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
  padding-top: 18px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  ${B4} {
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;

export default CategoryInputField;
