import { DEFAULT_WISHLIST_FILTER_LIST } from '@/constants/User/wishlist';
import { CommonInner } from '@/style/common';
import { WishlistFilterType } from '@/types';
import { useEffect, useState } from 'react';
import FilterBar from './FilterBar';
import UserTitle from '@/components/Title/UserTitle';
import styled from 'styled-components';
import ProgramCard from '@/components/ProgramCard/ProgramCard';
import { useGetMyFavorite } from '@/apis/favorite';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface FilterType {
  [key: string]: string | null;
  region: string | null;
  programType: string | null;
  programStatus: string | null;
}

const WishList = () => {
  const [filterParams] = useSearchParams();
  const [filterInput, setFilterInput] = useState<WishlistFilterType>(
    DEFAULT_WISHLIST_FILTER_LIST,
  );
  const [filterData, setFilterData] = useState<FilterType | null>(null);
  const { data: wishlistData, refetch: getWishlistRefetch } =
    useGetMyFavorite(filterData);
  const navigate = useNavigate();

  useEffect(() => {
    let newFilterData: FilterType = {
      region: null,
      programType: null,
      programStatus: null,
    };
    let newFilterInput = JSON.parse(
      JSON.stringify(DEFAULT_WISHLIST_FILTER_LIST),
    );
    for (const key in newFilterInput) {
      if (filterParams.get(key)) {
        newFilterInput[key] = filterParams.get(key);
        newFilterData[key] = filterParams.get(key);
      }
    }

    setFilterInput({ ...newFilterInput });
    setFilterData(newFilterData);
  }, [filterParams]);

  useEffect(() => {
    if (filterData !== null) getWishlistRefetch();
  }, [filterData]);

  const handleSubmit = () => {
    let searchPath = '';
    for (const key in filterInput) {
      if (filterInput[key] !== null && filterInput[key] !== '') {
        searchPath = [searchPath, `${key}=${filterInput[key]}`].join('&');
      }
    }

    navigate(`?${searchPath}`);
  };

  const handleChangeFilterInput = (itemTitle: string, itemInput: string) => {
    setFilterInput({ ...filterInput, [itemTitle]: itemInput });
  };

  return (
    <CommonInner>
      <Container>
        <div className="title-container">
          <UserTitle>갈래 말래</UserTitle>
          <div className="description">찜한 여행 프로그램을 확인해보세요!</div>
        </div>
        <FilterBar
          filterInput={filterInput}
          handleChangeFilterInput={handleChangeFilterInput}
          handleSubmit={handleSubmit}
        />
        {wishlistData && wishlistData.length > 0 ? (
          <ProgramCard programList={wishlistData} />
        ) : (
          <NoData>찜한 여행 프로그램이 없어요</NoData>
        )}
      </Container>
    </CommonInner>
  );
};
export default WishList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 120px;
  margin-bottom: 180px;

  body:not(&) {
    background-color: white;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    .description {
      color: var(--grey-500, #8e9398);
      font-family: SUIT-Medium;
      font-size: 24px;
      font-style: normal;
      line-height: 150%; /* 36px */
    }
  }
`;

const NoData = styled.div`
  color: var(--grey-400, #aeb3b8);
  font-family: SUIT-SemiBold;
  font-size: 18px;
  font-style: normal;
  line-height: 140%; /* 25.2px */
`;
