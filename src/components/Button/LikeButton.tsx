import styled from 'styled-components';
import LikeIcon from '@/assets/icons/favorite_button2_icon.svg';
import UnLikeIcon from '@/assets/icons/unfavorite_button2_icon.svg';
import { useCallback } from 'react';

interface Props {
  isLike: boolean;
  setIsLike: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
}

const LikeButton: React.FC<Props> = ({ isLike, setIsLike, type }) => {
  // Todo: 인자로 id 전달받아서 서버에 찜 목록에 등록하는 API 연결
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      switch (type) {
        case 'program':
          setIsLike(prev => !prev);
          break;
        case 'posting':
          setIsLike(prev => !prev);
          break;
      }
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

export default LikeButton;

const Wrapper = styled.div`
  z-index: 3;
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
