import { fetchMostLikedPosting } from '@/apis/posting';
import Loading from '@/components/Loading/Loading';
import PageBar from '@/components/PageBar/PageBar';
import { B2Bold, H3 } from '@/style/fonts/StyledFonts';
import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const OtherPostings: React.FC<{ postingType: string }> = ({ postingType }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  // Todo: 서버에서 데이터 불러와야 함(5개씩 페이지네이션)

  const { isLoading, data } = useQuery(
    ['mostLiked', page],
    fetchMostLikedPosting(postingType, page, 5),
  );

  const hanleClick = useCallback(
    (id: number) => {
      const route = postingType === 'reviews' ? 'review' : 'archive';
      navigate(`/${route}/${id}`);
    },
    [postingType],
  );

  if (isLoading) return <Loading />;
  const postingData = data?.data?.result;

  return (
    <Container>
      <H3 $fontColor="#15191D">이 게시판 글</H3>
      <PostingList>
        {postingData[postingType] &&
          postingData[postingType].map(
            ({ title, id }: { title: string; id: number }) => (
              <PostingItem key={id}>
                <B2Bold $fontColor="#53575C" onClick={() => hanleClick(id)}>
                  {title}
                </B2Bold>
              </PostingItem>
            ),
          )}
      </PostingList>
      <PageBar page={page} setPage={setPage} maxPage={postingData?.totalSize} />
    </Container>
  );
};

export default OtherPostings;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  margin-top: 76px;
  gap: 32px;
`;

const PostingList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const PostingItem = styled.div`
  display: flex;
  align-items: flex-start;

  width: 100%;
  padding: 32px 14px;
  gap: 136px;
  border-bottom: 1px solid var(--grey-200, #e3e7ed);

  pre {
    &:hover {
      color: #0e86f4;
      cursor: pointer;
    }
  }
`;
