import { useState } from 'react';
// import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Attatchment from './Attatchment';
import Posting from './Posting';
import { PostingDataType } from '@/types';
import PostingNav from './PostingNav';

const tempData: PostingDataType = {
  // Todo: 서버에서 불러와야 할 데이터
  type: '여행 지원사업',
  title: '거제 한달살기 후기!',
  nickName: '체크재국',
  content:
    '안녕하세요 ~\n이번 10월 거제 한달살기 다녀왔습니다!\n후기 올립니다 ~\n넘 조았고 지원금도 잘 받았어요!\n짱~',
  hashTags: ['거제도', '한달살기', '지원서 꿀팁'],
  registeredDate: '2023.11.05 01:22',
  attatchment:
    'https://dpylr00zltv9q.cloudfront.net/2023-2%20%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%B5%E1%84%82%E1%85%B3%E1%86%BC(%E1%84%82%E1%85%A1)%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A9%E1%84%89%E1%85%A1%20-%20%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%A5%E1%86%AB%20%E1%84%87%E1%85%A5%E1%84%8C%E1%85%A5%E1%86%AB%20a40b051f32fd46db9f76f79863cbf08a.pdf',
};

const PostingBox = () => {
  // const { id: postingId } = useParams();
  const [isLike, setIsLike] = useState(false);

  return (
    <Container>
      <Posting {...tempData} isLike={isLike} setIsLike={setIsLike} />
      <Attatchment fileSrc={tempData.attatchment} fileName="임시 파일" />
      <PostingNav prevId={2} nextId={3} />
    </Container>
  );
};

export default PostingBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  gap: 24px;

  > div {
    &:nth-child(3) {
      margin-top: 16px;
    }
  }
`;
