import { useState } from 'react';
import styled from 'styled-components';

import Introduce from './Introduce';
import HistoryList from './components/HistoryList';
import MyMileage from './MyMileage';
import Filter from '../board/Filter';
import PageBar from '@/components/PageBar/PageBar';
import TipCard from './components/TipCard';

import DropDown from '@/components/DropDown/DropDown';
import { useQuery } from 'react-query';
import { fetchPointList } from '@/apis/mileage';
import Loading from '@/components/Loading/Loading';

const filterList: string[] = ['전체', '적립 내역', '사용 내역'];
const termList: string[] = ['전체', '일주일', '한 달', '3개월', '6개월', '1년'];

// 내 마일리지 페이지
const Mileage = () => {
  const [page, setPage] = useState<number>(1); // 페이지네이션
  const [filter, setFilter] = useState<string>('전체');
  const [period, setPeriod] = useState<string>(''); // 조회 기간

  const { isLoading, data } = useQuery(
    ['myPoint', page, filter, period],
    fetchPointList(filter, period, page, 10),
    {
      cacheTime: 5005,
      staleTime: 5000,
    },
  );

  if (isLoading) return <Loading />;
  const myPoint = data?.data?.result;
  console.log(myPoint);
  return (
    <Container>
      {/* 페이지 소개 */}
      <Introduce />
      {/* 마일리지 잔액 */}
      <MyMileage point={myPoint?.userPoint} />
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
              selected={period}
              setSelected={setPeriod}
            />
          </DropDownWrapper>
        </FilterContainer>
        <HistoryList histories={myPoint?.points} />
        <PageBar page={page} setPage={setPage} maxPage={myPoint.totalPage} />
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
