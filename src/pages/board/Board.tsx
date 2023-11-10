import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Introduction from './Introduction';
import Filter from './Filter';
import PostingList from './PostingList';
import { PostingType } from '@/types';
import PageBar from '@/components/PageBar/PageBar';
import { useLocation } from 'react-router-dom';
import SearchBar from '@/components/SearchBar/SearchBar';

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

export const tempData: PostingType[] = [
  // 임시 데이터 (API 연결되면 삭제 예정)
  {
    boardName: '이벤트',
    title:
      '취준 고민 1개만 남겨도 커피 드려요! 삼성/SKblablablablablablablablablablablabla',
    id: 1,
    nickName: '닉네임',
    registerDate: '2023.10.13',
    type: '여행 지원사업 후기',
  },
  {
    boardName: '이벤트',
    title:
      '취준 고민 1개만 남겨도 커피 드려요! 삼성/SKblablablablablablablablablablablabla',
    id: 2,
    nickName: '닉네임',
    registerDate: '2023.10.13',
    type: '여행 지원사업 후기',
  },
  {
    boardName: '이벤트',
    title:
      '취준 고민 1개만 남겨도 커피 드려요! 삼성/SKblablablablablablablablablablablabla',
    id: 3,
    nickName: '닉네임',
    registerDate: '2023.10.13',
    type: '여행 지원사업 후기',
  },
  {
    boardName: '이벤트',
    title:
      '취준 고민 1개만 남겨도 커피 드려요! 삼성/SKblablablablablablablablablablablabla',
    id: 4,
    nickName: '닉네임',
    registerDate: '2023.10.13',
    type: '여행 대외활동 후기',
  },
  {
    boardName: '이벤트',
    title:
      '취준 고민 1개만 남겨도 커피 드려요! 삼성/SKblablablablablablablablablablablabla',
    id: 5,
    nickName: '닉네임',
    registerDate: '2023.10.13',
    type: '여행 지원사업 후기',
  },
  {
    boardName: '이벤트',
    title:
      '취준 고민 1개만 남겨도 커피 드려요! 삼성/SKblablablablablablablablablablablabla',
    id: 6,
    nickName: '닉네임',
    registerDate: '2023.10.13',
    type: '여행 대외활동 후기',
  },
  {
    boardName: '이벤트',
    title:
      '취준 고민 1개만 남겨도 커피 드려요! 삼성/SKblablablablablablablablablablablabla',
    id: 7,
    nickName: '닉네임',
    registerDate: '2023.10.13',
    type: '여행 지원사업 후기',
  },
  {
    boardName: '이벤트',
    title:
      '취준 고민 1개만 남겨도 커피 드려요! 삼성/SKblablablablablablablablablablablabla',
    id: 8,
    nickName: '닉네임',
    registerDate: '2023.10.13',
    type: '여행 대외활동 후기',
  },
  {
    boardName: '이벤트',
    title:
      '취준 고민 1개만 남겨도 커피 드려요! 삼성/SKblablablablablablablablablablablabla',
    id: 9,
    nickName: '닉네임',
    registerDate: '2023.10.13',
    type: '여행 공모전 후기',
  },
  {
    boardName: '이벤트',
    title: '취준 고민 1개만 남겨도 커피 드려요!',
    id: 10,
    nickName: '닉네임',
    registerDate: '2023.10.13',
    type: '여행 공모전 후기',
  },
  {
    boardName: '이벤트',
    title:
      '취준 고민 1개만 남겨도 커피 드려요! 삼성/SKblablablablablablablablablablablabla',
    id: 11,
    nickName: '닉네임',
    registerDate: '2023.10.13',
    type: '여행 공모전 후기',
  },
];

const Board: React.FC<BoardProps> = ({ title, description, imageSrc }) => {
  const [filter, setFilter] = useState<string>('전체'); // 전체가 디폴트
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState<string>('');

  const location = useLocation();

  useEffect(() => {
    if (location?.state?.filter) {
      setFilter(location.state.filter);
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filter]);

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
          handleClick={() => {}}
        />
      </SearchBarWrapper>
      <PostingList filter={filter} postingList={tempData} />
      <PageBar page={page} setPage={setPage} maxPage={20} />
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
