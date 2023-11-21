import styled from 'styled-components';
import LikeIcon from '@/assets/icons/favorite_button_icon.svg';
import UnLikeIcon from '@/assets/icons/unfavorite_button_icon.svg';
import { useCallback } from 'react';

interface Props {
  isLike: boolean;
  setIsLike: React.Dispatch<React.SetStateAction<boolean>>;
}

const TranslucentLikeButton: React.FC<Props> = ({ isLike, setIsLike }) => {
  // Todo: 인자로 id 전달받아서 서버에 찜 목록에 등록하는 API 연결
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      console.log('좋아요 관련 로직 넣기');
      setIsLike(!isLike);
    },
    [isLike],
  );

  return (
    <Wrapper>
      {isLike ? (
        <img src={LikeIcon} onClick={handleClick} />
      ) : (
        <img src={UnLikeIcon} onClick={handleClick} />
      )}
    </Wrapper>
  );
};

export default TranslucentLikeButton;

const Wrapper = styled.div`
  z-index: 3;
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
