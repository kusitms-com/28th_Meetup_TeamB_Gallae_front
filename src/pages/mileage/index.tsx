import { useState } from 'react';
import styled from 'styled-components';

import Introduce from './Introduce';
import HistoryList from './components/HistoryList';
import MyMileage from './MyMileage';
import Filter from '../board/Filter';
import PageBar from '@/components/PageBar/PageBar';
import TipCard from './components/TipCard';

import { MileageHistoryType } from '@/types';
import DropDown from '@/components/DropDown/DropDown';

const filterList: string[] = ['전체', '적립내역', '사용내역'];
const termList: string[] = ['전체', '일주일', '한 달', '3개월', '6개월', '1년'];

const historyData: MileageHistoryType[] = [
  {
    id: 1,
    date: '2023-11-05',
    time: '10:55',
    type: '적립',
    detail: '좋아요 누르기',
    usage: 1,
  },
  {
    id: 2,
    date: '2023-11-05',
    time: '10:55',
    type: '적립',
    detail: '내역이 엄청 긴 상황을 가정한 내역 데이터 넣기',
    usage: 1,
  },
  {
    id: 3,
    date: '2023-11-05',
    time: '10:55',
    type: '적립',
    detail: '내역이 엄청 긴 상황을 가정한 내역 데이터 넣기',
    usage: -40,
  },
  {
    id: 4,
    date: '2023-11-05',
    time: '10:55',
    type: '적립',
    detail: '내역이 엄청 긴 상황을 가정한 내역 데이터 넣기',
    usage: -40,
  },
  {
    id: 5,
    date: '2023-11-05',
    time: '10:55',
    type: '적립',
    detail: '내역이 엄청 긴 상황을 가정한 내역 데이터 넣기',
    usage: 1,
  },
  {
    id: 6,
    date: '2023-11-05',
    time: '10:55',
    type: '적립',
    detail: '내역이 엄청 긴 상황을 가정한 내역 데이터 넣기',
    usage: 1,
  },
  {
    id: 7,
    date: '2023-11-05',
    time: '10:55',
    type: '적립',
    detail: '내역이 엄청 긴 상황을 가정한 내역 데이터 넣기',
    usage: 1,
  },
];

// 내 마일리지 페이지
const Mileage = () => {
  const [point] = useState<number>(40); // 현재 마일리지
  const [page, setPage] = useState<number>(1); // 페이지네이션
  const [filter, setFilter] = useState<string>('전체');
  const [term, setTerm] = useState<string>(''); // 조회 기간

  return (
    <Container>
      {/* 페이지 소개 */}
      <Introduce />
      {/* 마일리지 잔액 */}
      <MyMileage point={point} />
      {/* 이용 내역 */}
      <HistoryContainer>
        <FilterContainer>
          <Filter
            filter={filter}
            setFilter={setFilter}
            filterList={filterList}
          />
          <DropDownWrapper>
            <DropDown
              placeholder="조회 기간"
              position="absolute"
              size="sm"
              dropdownList={termList}
              selected={term}
              setSelected={setTerm}
            />
          </DropDownWrapper>
        </FilterContainer>
        <HistoryList histories={historyData} />
        <PageBar page={page} setPage={setPage} maxPage={20} />
      </HistoryContainer>
      {/* 마일리지 관련 팁 */}
      <TipContainer>
        <TipCard index={0} />
        <TipCard index={1} />
      </TipContainer>
    </Container>
  );
};

export default Mileage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 1440px;
  gap: 124px;
  margin: 229px auto 369px;
`;

const HistoryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 1040px;
  flex-shrink: 0;
  gap: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const TipContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 42px;
`;

const DropDownWrapper = styled.div`
  position: relative;
  width: 140px;
`;
