import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Introduction from './Introduction';
import Filter from './Filter';
import PostingList from './PostingList';
import PageBar from '@/components/PageBar/PageBar';
import { useLocation } from 'react-router-dom';
import SearchBar from '@/components/SearchBar/SearchBar';
import { useQuery } from 'react-query';
import { fetchBoardData } from '@/apis/board';
import Loading from '@/components/Loading/Loading';

interface BoardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const filterList: string[] = [
  '전체',
  '여행 지원사업 후기',
  '여행 대외활동 후기',
  '여행 공모전 후기',
];

const Board: React.FC<BoardProps> = ({ title, description, imageSrc }) => {
  const [filter, setFilter] = useState<string>('전체'); // 전체가 디폴트
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState<string>('');

  const boardType: string = window.location.pathname.includes('review')
    ? 'review'
    : 'archive';

  const location = useLocation();

  const { isLoading, data } = useQuery(
    [`${boardType}`, filter, page],
    fetchBoardData(boardType, filter, page, 10),
    {
      cacheTime: 500005,
      staleTime: 500000,
    },
  );

  useEffect(() => {
    if (location?.state?.filter) {
      setFilter(location.state.filter);
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filter]);

  if (isLoading) return <Loading />;

  const postingData = data?.data?.result?.reviews;
  const maxPage = data?.data?.result?.totalSize;

  return (
    <Container>
      <Introduction
        title={title}
        description={description}
        imageSrc={imageSrc}
      />
      <Filter filter={filter} setFilter={setFilter} filterList={filterList} />
      <SearchBarWrapper>
        <SearchBar
          placeHolder={'검색어를 입력해 주세요'}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSubmit={() => {}}
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
`;

const SearchBarWrapper = styled.div`
  width: 543px;
  flex-shrink: 0;
  margin-bottom: 32px;

  align-self: flex-start;
`;
