import { B2, B4 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';
import DateInput from '../Input/DateInput';
import FieldTitle from './FieldTitle';
import { ProgramRegisterInfoType, Value } from '@/types';
import { useState } from 'react';
import moment from 'moment';
import { INPUT_FIELD } from '@/constants/Register';

interface DateInputProps {
  startTitle: string;
  endTitle: string;
  programContent: ProgramRegisterInfoType;
  setProgramContent: (content: ProgramRegisterInfoType) => void;
  isPossibleSubmit: boolean;
}

const DateInputField = ({
  startTitle,
  endTitle,
  programContent,
  setProgramContent,
  isPossibleSubmit,
}: DateInputProps) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const handleStartCalenderChange = (value: Value) => {
    const dateValue = value as Date;
    setStartDate(dateValue);
    setProgramContent({
      ...programContent,
      [startTitle]: moment(dateValue).format('YYYY-MM-DD'),
    });
  };

  const handleEndCalenderChange = (value: Value) => {
    const dateValue = value as Date;
    setEndDate(dateValue);
    setProgramContent({
      ...programContent,
      [endTitle]: moment(dateValue).format('YYYY-MM-DD'),
    });
  };

  return (
    <InnerContainer>
      <TitleContainer>
        <FieldTitle field={INPUT_FIELD[startTitle].title} />
      </TitleContainer>
      <InputContainer>
        <InputInnerContainer>
          <DateInput
            placeholder={INPUT_FIELD[startTitle].placeholder}
            value={programContent[startTitle]}
            date={startDate}
            handleCalendarChange={handleStartCalenderChange}
          />
          <B4
            $fontColor={
              !isPossibleSubmit && programContent[startTitle] === ''
                ? 'red'
                : 'transparent'
            }
          >
            {INPUT_FIELD[startTitle].alertMessage}
          </B4>
        </InputInnerContainer>
        <B2 $fontColor="var(--color_gray900)">-</B2>
        <InputInnerContainer>
          <DateInput
            placeholder={INPUT_FIELD[endTitle].placeholder}
            value={programContent[endTitle]}
            date={endDate}
            handleCalendarChange={handleEndCalenderChange}
          />
          <B4
            $fontColor={
              !isPossibleSubmit && programContent[endTitle] === ''
                ? 'red'
                : 'transparent'
            }
          >
            {INPUT_FIELD[endTitle].alertMessage}
          </B4>
        </InputInnerContainer>
      </InputContainer>
    </InnerContainer>
  );
};

export default DateInputField;

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
  flex-direction: row;
  align-items: center;
  gap: 24px;

  ${B2} {
    margin-bottom: 20px;
  }
`;

const InputInnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;

  ${B4} {
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;
