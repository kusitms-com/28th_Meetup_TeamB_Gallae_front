import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

interface CustomRangeCalendarProps {
  date: [Date, Date];
  handleCalendarChange: (value: [Date, Date]) => void;
  setIsOpen?: (isOpen: boolean) => void;
}

interface CustomPickCalendarProps {
  date: Date;
  handleCalendarChange: (value: Date) => void;
  setIsOpen?: (isOpen: boolean) => void;
}

export const CustomRangeCalendar = ({
  date,
  handleCalendarChange,
}: CustomRangeCalendarProps) => {
  return (
    <Container $position={false}>
      {
        <Calendar
          defaultValue={date}
          onChange={value => {
            const dateValue = value as [Date, Date];
            handleCalendarChange(dateValue);
          }}
          formatDay={(_, date) => moment(date).format('D')}
          prevLabel={'◀'}
          prev2Label={null}
          nextLabel={'▶'}
          next2Label={null}
          selectRange={true}
          goToRangeStartOnSelect={false}
          defaultActiveStartDate={date[1]} //에러가 발생하지만 해결법을 모르겠음. 실행에는 문제없음.
        />
      }
    </Container>
  );
};

export const CustomPickCalendar = ({
  date,
  handleCalendarChange,
  setIsOpen,
}: CustomPickCalendarProps) => {
  return (
    <Container $position={true}>
      {
        <Calendar
          value={date}
          onChange={value => {
            const dateValue = value as Date;
            handleCalendarChange(dateValue);
            setTimeout(() => {
              setIsOpen && setIsOpen(false);
            }, 150);
          }}
          formatDay={(_, date) => moment(date).format('D')}
          prevLabel={'◀'}
          prev2Label={null}
          nextLabel={'▶'}
          next2Label={null}
        />
      }
    </Container>
  );
};

const Container = styled.div<{ $position: boolean }>`
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  margin-top: 12px;
  position: absolute;
  z-index: 10;
  ${props => props.$position && `top: 67px; right: 0;`}

  .react-calendar {
    width: 320px;
    padding: 20px;
    border: none;
    border-radius: 20px;
  }

  /* 달력 헤더(네비게이션) */
  .react-calendar__navigation {
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;

    button {
      min-width: 20px;
      background-color: white;
    }

    button:enabled:hover,
    button:enabled:focus {
      background-color: white;
    }

    .react-calendar__navigation__arrow {
      padding: 2px;
    }

    .react-calendar__navigation__label {
      flex-grow: 0 !important;
      padding: 0px 30px;

      span {
        /* B4Bold */
        font-weight: 700;
        font-size: 16px;
        line-height: 140%;
        color: #3c3c3c;
      }
    }
  }

  /* 달력 몸통 */
  .react-calendar__viewContainer {
    button {
      font-size: 16px;
      line-height: 140%;
      font-weight: 700;
      color: var(--color_gray900);
    }
    .react-calendar__tile--hasActive,
    .react-calendar__tile--hasActive abbr {
      background-color: var(--color_sub3);
      color: white;
    }
  }

  .react-calendar__month-view {
    .react-calendar__month-view__weekdays abbr {
      /* B4 */
      font-size: 14px;
      line-height: 140%;
      font-weight: 500;
      color: var(--color_gray400);
    }

    .react-calendar__month-view__days {
      button {
        background-color: white;
      }

      .react-calendar__tile {
        width: 40px;
        height: 40px;

        display: flex;
        justify-content: center;
        align-items: center;
        ${props => (props.$position ? `padding: 2px;` : `padding: 0;`)}

        abbr {
          /* B4Bold */
          font-weight: 700;
          font-size: 16px;
          line-height: 140%;
          color: var(--color_gray900);

          width: 100%;
          padding: 6px 0px;
        }
      }

      .react-calendar__tile--now abbr {
        color: var(--color_sub3);
        background-color: white;
      }

      .react-calendar__month-view__days__day--neighboringMonth abbr {
        color: var(--color_gray300);
      }

      .react-calendar__tile--active,
      .react-calendar__tile--range {
        abbr {
          background-color: var(--color_sub3);
          color: white;
        }
      }

      ${props =>
        props.$position
          ? `
          .react-calendar__tile--rangeEnd abbr {
            border-radius: 50%;
          }
          `
          : `
            .react-calendar__tile--rangeEnd abbr {
              border-radius: 0% 50% 50% 0%;
            }

            .react-calendar__tile--rangeStart abbr {
              border-radius: 50% 0% 0% 50%;
            }
          `}
    }
  }
`;
