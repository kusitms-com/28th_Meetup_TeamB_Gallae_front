import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import Introduction from './Introduction';
import Filter from './Filter';
import PostingList from './PostingList';
import ReviewImage from '@/assets/board/review-image.svg';
import ArchiveImage from '@/assets/board/archive-image.svg';

import PageBar from '@/components/PageBar/PageBar';
import SearchBar from '@/components/SearchBar/SearchBar';
import { fetchBoardData } from '@/apis/board';
import Loading from '@/components/Loading/Loading';

interface BoardProps {
  title: string;
  description: string;
}

const filterList: string[][] = [
  ['전체', '여행 지원사업 후기', '여행 대외활동 후기', '여행 공모전 후기'],
  ['전체', '지원서 예시자료', '보고서 예시자료'],
];

const Board: React.FC<BoardProps> = ({ title, description }) => {
  const [filter, setFilter] = useState<string>('전체'); // 전체가 디폴트
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState<string>(''); // 검색어 입력
  const [search, setSearch] = useState<string>(''); // 검색어 저장

  const currentPath = window.location.pathname;
  const boardType: string = currentPath.includes('review')
    ? 'reviews'
    : 'archives';

  const location = useLocation();

  const { isLoading, data } = useQuery(
    [`${boardType}`, filter, page, search],
    fetchBoardData(boardType, filter, search, page, 10),
    {
      cacheTime: 500005,
      staleTime: 500000,
    },
  );

  useEffect(() => {
    // 라우팅이 변경되면 검색 내용 초기화
    setSearch('');
  }, [boardType]);

  useEffect(() => {
    if (location?.state?.filter) {
      setFilter(location.state.filter);
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filter]);

  if (isLoading) return <Loading />;

  const postingData = data?.data?.result[boardType];
  const maxPage = data?.data?.result?.totalSize;

  return (
    <Container>
      <Introduction
        title={title}
        description={description}
        imageSrc={boardType === 'reviews' ? ReviewImage : ArchiveImage}
      />
      <Filter
        filter={filter}
        setFilter={setFilter}
        filterList={filterList[boardType === 'reviews' ? 0 : 1]}
      />
      <SearchBarWrapper>
        <SearchBar
          placeHolder={'검색어를 입력해 주세요'}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSubmit={() => {
            setSearch(searchInput);
            setSearchInput('');
          }}
        />
      </SearchBarWrapper>
      <PostingList postingList={postingData} />
      <PageBar page={page} setPage={setPage} maxPage={maxPage} />
    </Container>
  );
};

export default Board;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 88px;

  padding: 0 260px;
  margin-bottom: 128px;
`;

const SearchBarWrapper = styled.div`
  width: 543px;
  flex-shrink: 0;
  margin-bottom: 32px;

  align-self: flex-start;
`;
