import styled from 'styled-components';
// import PostingList from '../../board/PostingList';
import { useState } from 'react';
import PageBar from '@/components/PageBar/PageBar';

const MyPosting = () => {
  const [page, setPage] = useState(1);

  return (
    <Container>
      <Title>{'내가 쓴 글'}</Title>
      {/* <PostingList filter={'전체'} postingList={tempData} /> */}
      <PageBar page={page} setPage={setPage} maxPage={20} />
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
