import PageBar from '@/components/PageBar/PageBar';
import { B2Bold, H3 } from '@/style/fonts/StyledFonts';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const OtherPostings = () => {
  const currentPath = window.location.pathname;
  const route = currentPath.split('/')[1];

  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  // Todo: 서버에서 데이터 불러와야 함(5개씩 페이지네이션)

  const hanleClick = useCallback((id: number) => {
    navigate(`/${route}/${id}`);
  }, []);

  return (
    <Container>
      <H3 $fontColor="#15191D">이 게시판 글</H3>
      <PostingList>
        <PostingItem>
          <B2Bold $fontColor="#53575C" onClick={() => hanleClick(1)}>
            {/* Todo: 추후에 서버에서 불러온 데이터로 교체 */}
            나홀로 갔다온 태안 3박4일 여행, 경비 절약한 방법...
          </B2Bold>
        </PostingItem>
      </PostingList>
      <PageBar page={page} setPage={setPage} maxPage={20} />
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
`;

const PostingItem = styled.div`
  display: flex;
  align-items: flex-start;

  width: 100%;
  padding: 32px 14px;
  gap: 136px;

  pre {
    &:hover {
      color: #0e86f4;
      cursor: pointer;
    }
  }
`;
