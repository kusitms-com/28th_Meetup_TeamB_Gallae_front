import RoundedInput from '@/pages/RegisterProgram/Input/RoundedInput';
import styled from 'styled-components';
import FieldTitle from './FieldTitle';
import { B4 } from '@/style/fonts/StyledFonts';
import { INPUT_FIELD } from '@/constants/Register';
import { ProgramRegisterInfoType } from '@/types';

// 어느 정도 정리 완료
interface DefaultInputProps {
  mainTitle: string;
  subTitle: string;
  programContent: ProgramRegisterInfoType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isPossibleSubmit: boolean;
}

const ContactInputField = ({
  mainTitle,
  subTitle,
  programContent,
  onChange,
  isPossibleSubmit,
}: DefaultInputProps) => {
  return (
    <InnerContainer>
      <TitleContainer>
        <FieldTitle field={INPUT_FIELD[mainTitle].title} />
      </TitleContainer>
      <InputContainer>
        <div className="input-container">
          <RoundedInput
            placeholder={INPUT_FIELD[mainTitle].placeholder}
            value={programContent[mainTitle]}
            name={mainTitle}
            onChange={onChange}
          />
          <RoundedInput
            placeholder={INPUT_FIELD[subTitle].placeholder}
            value={programContent[subTitle]}
            name={subTitle}
            onChange={onChange}
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

export default ContactInputField;
