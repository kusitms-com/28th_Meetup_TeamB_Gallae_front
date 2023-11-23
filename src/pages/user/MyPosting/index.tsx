import styled from 'styled-components';
import { useState } from 'react';
import { useQuery } from 'react-query';

import PostingList from '../../board/PostingList';
import PageBar from '@/components/PageBar/PageBar';
import Filter from '@/pages/board/Filter';
import { fetchMyBoardData } from '@/apis/board';
import Loading from '@/components/Loading/Loading';

const filterList: string[] = ['지원 후기', '자료실'];

const MyPosting = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<string>('지원 후기'); // 지원 후기 or 자료실

  const { isLoading, data } = useQuery(
    ['MyPosting', filter, page],
    fetchMyBoardData(filter, page, 10),
    {
      cacheTime: 500005,
      staleTime: 500000,
    },
  );

  if (isLoading) return <Loading />;

  const myPostingData = data?.data.result;
  return (
    <Container>
      <Title>{'내가 쓴 글'}</Title>
      <Filter filter={filter} setFilter={setFilter} filterList={filterList} />
      <PostingList
        postingList={myPostingData?.userPosts}
        linkType={filter === '지원 후기' ? 'review' : 'archive'}
      />
      <PageBar
        page={page}
        setPage={setPage}
        maxPage={myPostingData?.totalPages}
      />
    </Container>
  );
};

export default MyPosting;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 1440px;
  margin: 229px auto;

  body:not(&) {
    background-color: white;
  }

  > div {
    &:nth-child(3) {
      margin-top: 48px;
    }
  }
`;

const Title = styled.pre`
  color: var(--gray-900, #15191d);
  font-family: 'Recipekorea';
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 54px */

  margin-bottom: 88px;
`;
