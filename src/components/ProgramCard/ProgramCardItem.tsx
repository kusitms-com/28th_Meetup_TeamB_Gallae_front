import styled from 'styled-components';
import FavoriteIcon from '@/assets/icons/favorite_icon.svg';
import FavoriteButtonIcon from '@/assets/icons/favorite_button_icon.svg';
import UnfavoriteButtonIcon from '@/assets/icons/unfavorite_button_icon.svg';
import { B1Bold, B3, B3Bold, H3 } from '@/style/fonts/StyledFonts';
import { ProgramMainInfoType } from '@/types';
import { useState } from 'react';

const ProgramCardItem = ({ program }: { program: ProgramMainInfoType }) => {
  // 프로그램 좋아요 했는지 여부 (임시)
  // TODO: favorite/undfavorite 버튼 클릭할 때마다 서버와 통신?
  const [favorite, setFavorite] = useState<boolean>(true);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <Container>
      {!favorite ? (
        <img
          className="favorite-button"
          alt="favorite-button-icon"
          src={FavoriteButtonIcon}
          onClick={handleFavorite}
        />
      ) : (
        <img
          className="favorite-button"
          alt="unfavorite-button-icon"
          src={UnfavoriteButtonIcon}
          onClick={handleFavorite}
        />
      )}
      <img className="poster" alt="program-poster" src={program.photoUrl} />
      <ProgramInfoContainer>
        <B1Bold $fontColor="var(--color_sub3)">{program.remainDay}</B1Bold>
        <H3 $fontColor="var(--color_gray900)">{program.programName}</H3>
        <div className="hashTag-container">
          {program.hashTag.map(tag => (
            <B3 $fontColor="var(--color_gray400)" key={tag}>
              #{tag}
            </B3>
          ))}
        </div>
        <div className="favorite-container">
          <img alt="favorite-icon" src={FavoriteIcon} />
          <B3Bold $fontColor="var(--color_gray600)">{program.like}</B3Bold>
        </div>
      </ProgramInfoContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 323px;
  height: 546px;
  position: relative;

  .favorite-button {
    position: absolute;
    right: 17px;
    top: 18px;
    cursor: pointer;
  }

  .poster {
    width: 323px;
    height: 400px;
    border-radius: 20px;
    //object-fit: cover;
  }
`;

const ProgramInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-top: 16px;
  gap: 4px;

  .hashTag-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
  }

  .favorite-container {
    display: flex;
    flex-direction: row;
    gap: 4px;

    img {
      width: 16px;
      height: 16px;
    }
  }
`;

export default ProgramCardItem;
