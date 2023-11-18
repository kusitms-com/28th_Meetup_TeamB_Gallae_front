import { ProgramDetailInfoType } from '@/types';
import styled from 'styled-components';
import FavoriteButtonIcon from '@/assets/icons/favorite_button2_icon.svg';
import UnfavoriteButtonIcon from '@/assets/icons/unfavorite_button2_icon.svg';
import { useState } from 'react';
import MainButton from '@/components/Button/MainButton';
import { B1Bold, H1, H3 } from '@/style/fonts/StyledFonts';

const ProgramHead = ({ program }: { program: ProgramDetailInfoType }) => {
  // 임시방편
  const [favorite, setFavorite] = useState<boolean>(true);

  const handleChange = () => {
    setFavorite(!favorite);
  };

  return (
    <Container>
      <img alt="program-image" src={program.photoUrl} />
      <DescriptionContainer>
        <InfoContainer>
          <H1 $fontColor="var(--color_sub3)">{program.remainDay}</H1>
          <div className="program-name">{program.programName}</div>
          <SubInfo>
            <div className="title-container">
              <H3 $fontColor="var(--color_gray900)">지역</H3>
              <H3 $fontColor="var(--color_gray900)">모집 기간</H3>
              <H3 $fontColor="var(--color_gray900)">여행 기간</H3>
              <H3 $fontColor="var(--color_gray900)">문의처</H3>
              <H3 $fontColor="var(--color_gray900)"></H3>
            </div>
            <div className="description-container">
              <span>{program.location}</span>
              <span>{`${program.recruitStartDate} - ${program.recruitEndDate}`}</span>
              <span>{`${program.tripStartDate} - ${program.tripEndDate}`}</span>
              <span>{program.contact}</span>
              <span>{program.contactNumber}</span>
            </div>
          </SubInfo>
        </InfoContainer>
        <BtnContainer>
          {!favorite ? (
            <img
              alt="favorite-button-icon"
              src={FavoriteButtonIcon}
              onClick={handleChange}
            />
          ) : (
            <img
              alt="unfavorite-button-icon"
              src={UnfavoriteButtonIcon}
              onClick={handleChange}
            />
          )}
          <a href={program.programLink}>
            <MainButton
              $buttonColor="var(--color_sub3)"
              $buttonWidth="182px"
              $buttonHeight="62px"
            >
              <B1Bold $fontColor="white">신청링크</B1Bold>
            </MainButton>
          </a>
        </BtnContainer>
      </DescriptionContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 130px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    width: 503px;
    height: 720px;
    border-radius: 20px;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 80px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: left;

  .program-name {
    font-size: 44px;
    line-height: 150%;
    font-family: RecipeKorea;
  }
`;

const SubInfo = styled.div`
  display: flex;
  flex-direaction: row;
  gap: 80px;

  .title-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .description-container {
    display: flex;
    flex-direction: column;
    gap: 32px;

    span {
      font-family: SUIT-Medium;
      font-size: 24px;
      line-height: 150%;
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  img {
    width: 62px;
    height: 62px;
    cursor: pointer;
  }
`;

export default ProgramHead;
