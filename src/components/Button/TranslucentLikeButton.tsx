import styled from 'styled-components';

import LikeIcon from '@/assets/icons/favorite_button_icon.svg';
import UnLikeIcon from '@/assets/icons/unfavorite_button_icon.svg';
import { useCallback } from 'react';
import { postLike } from '@/apis/like';

interface Props {
  id: number;
  isLike: boolean;
  setIsLike: React.Dispatch<React.SetStateAction<boolean>>;
}

const TranslucentLikeButton: React.FC<Props> = ({ id, isLike, setIsLike }) => {
  // Todo: 인자로 id 전달받아서 서버에 찜 목록에 등록하는 API 연결
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      postLike('poster', id);
      setIsLike(prev => !prev);
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
    border-radius: 50%;
    cursor: pointer;
  }
`;
