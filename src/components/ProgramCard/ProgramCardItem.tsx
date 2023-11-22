import styled from 'styled-components';
import FavoriteIcon from '@/assets/icons/favorite_icon.svg';
import { B1Bold, B3, B3Bold, H3 } from '@/style/fonts/StyledFonts';
import { ProgramMainInfoType } from '@/types';
import { useNavigate } from 'react-router-dom';
import TranslucentLikeButton from '../Button/TranslucentLikeButton';
import DefaultProgramPreview from '../Default/DefaultProgramPreview';
import { useEffect, useState } from 'react';

const ProgramCardItem = ({ program }: { program: ProgramMainInfoType }) => {
  const navigate = useNavigate();
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    setIsLike(program.userLikeCheck);
  }, [program]);

  return (
    <Container
      onClick={() =>
        navigate(`/detailProgram/${program.programName}/${program.id}`)
      }
    >
      {program.photoUrl === null || program.photoUrl === '' ? (
        <DefaultProgramPreview />
      ) : (
        <img className="poster" alt="program-poster" src={program.photoUrl} />
      )}
      <LikeButtonWrapper>
        <TranslucentLikeButton
          id={program.id}
          isLike={isLike}
          setIsLike={setIsLike}
        />
      </LikeButtonWrapper>
      <ProgramInfoContainer>
        <B1Bold $fontColor="var(--color_sub3)">
          {program.remainDay === '마감'
            ? program.remainDay
            : `D-${program.remainDay}`}
        </B1Bold>
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
  cursor: pointer;

  .poster {
    width: 323px;
    height: 400px;
    border-radius: 20px;
    object-fit: cover;
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

const LikeButtonWrapper = styled.div`
  position: absolute;
  right: 17px;
  top: 18px;
`;

export default ProgramCardItem;
