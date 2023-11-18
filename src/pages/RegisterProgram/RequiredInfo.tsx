import { H3 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';
import { ProgramRegisterInfoType } from '@/types';
import DropdownInputField from './InputField/DropdownInputField';
import DefaultInputField from './InputField/DefaultInputField';
import ContactInputField from './InputField/ContactInputField';
import DateInputField from './InputField/DateInputField';
import CategoryInputField from './InputField/CategoryInputField';

interface RequiredInfoFieldProps {
  programContent: ProgramRegisterInfoType;
  setProgramContent: (content: ProgramRegisterInfoType) => void;
  isPossibleSubmit: boolean;
}
const RequiredInfo = ({
  programContent,
  setProgramContent,
  isPossibleSubmit,
}: RequiredInfoFieldProps) => {
  const handleDefaultInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProgramContent({ ...programContent, [name]: value });
  };

  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProgramContent({ ...programContent, [name]: value });
  };

  const handleDropdownClick = (field: string, item: string) => {
    setProgramContent({ ...programContent, [field]: item });
  };

  /* const handeCategoryDropdownClick = (location: string) => {
    setProgramContent({ ...programContent, location: location });
  }; */

  return (
    <Container>
      <H3 $fontColor="var(--color_gray900)">필수 입력 내용</H3>
      <InputFieldContainer>
        <DefaultInputField
          title="programName"
          programContent={programContent}
          onChange={handleDefaultInputChange}
          isPossibleSubmit={isPossibleSubmit}
        />
        <DropdownInputField
          title="location"
          programContent={programContent}
          onDropdownClick={handleDropdownClick}
          isPossibleSubmit={isPossibleSubmit}
        />
        <CategoryInputField
          mainTitle="programType"
          subTitle="programDetailType"
          programContent={programContent}
          onDropdownClick={handleDropdownClick}
          isPossibleSubmit={isPossibleSubmit}
        />
        <DateInputField
          startTitle="recruitStartDate"
          endTitle="recruitEndDate"
          programContent={programContent}
          setProgramContent={setProgramContent}
          isPossibleSubmit={isPossibleSubmit}
        />
        <DateInputField
          startTitle="activeStartDate"
          endTitle="activeEndDate"
          programContent={programContent}
          setProgramContent={setProgramContent}
          isPossibleSubmit={isPossibleSubmit}
        />
        <ContactInputField
          mainTitle="contact"
          subTitle="contactPhone"
          programContent={programContent}
          onChange={handleContactInputChange}
          isPossibleSubmit={isPossibleSubmit}
        />
        <DefaultInputField
          title="link"
          programContent={programContent}
          onChange={handleDefaultInputChange}
          isPossibleSubmit={isPossibleSubmit}
        />
        <DefaultInputField
          title="hashtag"
          programContent={programContent}
          onChange={handleDefaultInputChange}
          isPossibleSubmit={isPossibleSubmit}
        />
      </InputFieldContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export default RequiredInfo;
