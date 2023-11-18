import CalendarIcon from '@/assets/icons/calendar_icon.svg';
import { CustomPickCalendar } from '@/components/Calendar/CustomCalendar';
import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';

interface DefaultInputProps {
  placeholder: string;
  value: string;
  date: Date;
  handleCalendarChange: (value: Date) => void;
}

const DateInput = ({
  placeholder,
  value,
  date,
  handleCalendarChange,
}: DefaultInputProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current?.contains(e.target as HTMLDivElement)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClose);
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  }, [isOpen]);

  return (
    <Container ref={calendarRef}>
      <InputContainer onClick={() => setIsOpen(!isOpen)} $active={isOpen}>
        {value === '' ? (
          <span className="placeholder">{placeholder}</span>
        ) : (
          <span>{value}</span>
        )}
        <img alt="calendar-icon" src={CalendarIcon} className="calendar-icon" />
      </InputContainer>
      {isOpen && (
        <CustomPickCalendar
          date={date}
          handleCalendarChange={handleCalendarChange}
          setIsOpen={setIsOpen}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  border-radius: 40px;
  cursor: pointer;
`;

const InputContainer = styled.div<{ $active: boolean }>`
  position: relative;
  width: 100%;
  position: relative;
  border-radius: 40px;
  border: 1px solid;
  border-color: ${props =>
    props.$active ? 'var(--color_gray500)' : 'var(--color_gray200)'};
  padding: 20px 36px;

  .calendar-icon {
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translate(-50%, -50%);
  }

  span {
    color: var(--color_gray900);
    font-family: SUIT-Medium;
    font-size: 18px;
    font-style: normal;
    line-height: 140%;
  }

  .placeholder {
    color: var(--color_gray400);
  }
`;

export default DateInput;
