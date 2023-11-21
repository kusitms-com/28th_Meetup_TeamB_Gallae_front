import { ProgramDetailInfoType } from '@/types';
import styled from 'styled-components';
import MainButton from '@/components/Button/MainButton';
import { B1Bold, H1, H3 } from '@/style/fonts/StyledFonts';
import DefaultProgram from '@/components/Default/DefaultProgram';
import LikeButton from '@/components/Button/LikeButton';

interface ProgramHeadProps {
  program: ProgramDetailInfoType;
  isLike: boolean;
  setIsLike: React.Dispatch<React.SetStateAction<boolean>>;
  writer: boolean | null;
}
const ProgramHead = ({
  program,
  isLike,
  setIsLike,
  writer,
}: ProgramHeadProps) => {
  return (
    <Container>
      {program.photoUrl === null || program.photoUrl === '' ? (
        <DefaultProgram />
      ) : (
        <img alt="program-poster" src={program.photoUrl} />
      )}
      <DescriptionContainer>
        <InfoContainer>
          <H1 $fontColor="var(--color_sub3)">
            {program.remainDay === '마감'
              ? program.remainDay
              : `D-${program.remainDay}`}
          </H1>
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
              <span>{`${program.activeStartDate} - ${program.activeEndDate}`}</span>
              <span>{program.contact}</span>
              <span>{program.contactNumber}</span>
            </div>
          </SubInfo>
        </InfoContainer>
        <BtnContainer>
          {writer !== null && !writer && (
            <LikeButton
              id={program.id}
              isLike={isLike}
              setIsLike={setIsLike}
              type="program"
            />
          )}
          <a
            href={
              program.programLink.includes('https://')
                ? program.programLink
                : `https://${program.programLink}`
            }
          >
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
    object-fit: cover;
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
