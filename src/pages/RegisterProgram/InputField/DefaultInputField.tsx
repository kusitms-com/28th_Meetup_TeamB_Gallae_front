import RoundedInput from '@/pages/RegisterProgram/Input/RoundedInput';
import styled from 'styled-components';
import FieldTitle from './FieldTitle';
import { B4 } from '@/style/fonts/StyledFonts';
import { INPUT_FIELD } from '@/constants/Register';
import { ProgramRegisterInfoType } from '@/types';

interface DefaultInputProps {
  title: string;
  programContent: ProgramRegisterInfoType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isPossibleSubmit: boolean;
}

const DefaultInputField = ({
  title,
  programContent,
  onChange,
  isPossibleSubmit,
}: DefaultInputProps) => {
  return (
    <Container>
      <TitleContainer>
        <FieldTitle field={INPUT_FIELD[title].title} />
      </TitleContainer>
      <InputContainer>
        <RoundedInput
          placeholder={INPUT_FIELD[title].placeholder}
          value={programContent[title]}
          name={title}
          onChange={onChange}
        />
        {title === 'programName' && (
          <B4
            $fontColor={
              !isPossibleSubmit &&
              (programContent[title] === '' ||
                programContent[title].length > 50)
                ? 'red'
                : 'transparent'
            }
          >
            {INPUT_FIELD[title].alertMessage}
          </B4>
        )}
        {title !== 'programName' && (
          <B4
            $fontColor={
              !isPossibleSubmit && programContent[title] === ''
                ? 'red'
                : 'transparent'
            }
          >
            {INPUT_FIELD[title].alertMessage}
          </B4>
        )}
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
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

export default DefaultInputField;
