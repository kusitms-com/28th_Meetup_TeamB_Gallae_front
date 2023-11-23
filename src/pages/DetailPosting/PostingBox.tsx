import styled from 'styled-components';

import Attatchment from './Attatchment';
import Posting from './Posting';
import { PostingDataType } from '@/types';
import PostingNav from './PostingNav';

const PostingBox: React.FC<{
  id: number;
  postingData: PostingDataType;
  isLike: boolean;
  setIsLike: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ id: postingId, postingData, isLike, setIsLike }) => {
  return (
    <Container>
      <Posting {...postingData} isLike={isLike} setIsLike={setIsLike} />
      {postingData?.fileName && (
        <Attatchment
          fileSrc={postingData.fileUrl as string}
          fileName={postingData.fileName as string}
        />
      )}
      <PostingNav
        prevId={postingData?.previousId || postingId}
        nextId={postingData?.nextId || postingId}
        id={postingId}
      />
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
