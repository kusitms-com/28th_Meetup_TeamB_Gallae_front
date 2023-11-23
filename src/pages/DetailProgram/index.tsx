import { CommonInner } from '@/style/common';
import styled from 'styled-components';
import ProgramHead from './ProgramHead';
import ProgramBody from './ProgramBody';
import RecommendProgram from './RecommendProgram';
import HoneyTipButton from './HoneyTipButton';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetProgramDetailInfo,
  useGetRegionLodgment,
  useGetRegionTour,
  useGetSimilarRecommend,
} from '@/apis/program';
import RecommendSpot from './RecommendSpot';
import RecommendAccom from './RecommendAccom';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '@/recoil/LoginAtom';
import RoundedButton from '@/components/Button/RoundedButton';
import { B1Bold } from '@/style/fonts/StyledFonts';
import { useEffect, useState } from 'react';
import { ManagerAPI } from '@/apis/manager';

const DetailProgram = () => {
  const { _programId } = useParams();
  const programId = Number(_programId);
  const [isLike, setIsLike] = useState(false);
  const [writerVersion, setWriterVersion] = useState<boolean | null>(null);
  const { data: programInfoData } = useGetProgramDetailInfo(
    programId ? programId : -1,
  );
  const { data: recommendProgram } = useGetSimilarRecommend({
    programId,
    writerVersion,
  });
  const { data: recommendSpotList } = useGetRegionTour({
    programId,
    writerVersion,
  });
  const { data: recommendAccomList } = useGetRegionLodgment({
    programId,
    writerVersion,
  });
  const userInfo = useRecoilValue(UserAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (programInfoData) {
      if (userInfo.id === programInfoData.result.writerId) {
        setWriterVersion(true);
      } else {
        setWriterVersion(false);
      }

      setIsLike(programInfoData.result.userLikeCheck);
    }
  }, [programInfoData]);

  const handleDeleteProgram = () => {
    if (window.confirm('공고를 삭제하시겠습니까?')) {
      ManagerAPI.deleteProgram(programInfoData.result.id).then(() => {
        window.alert('공고가 삭제되었습니다.');
        navigate(-1);
      });
    }
  };

  if (programInfoData && programInfoData !== undefined)
    return (
      <Container>
        <Background />
        <CommonInner>
          <InnerContainer>
            <ProgramHead
              program={programInfoData.result}
              isLike={isLike}
              setIsLike={setIsLike}
              writer={writerVersion}
            />
            <hr />
            <ProgramBody description={programInfoData.result.description} />
            <hr />
            {!writerVersion && (
              <RecommendProgram
                programs={
                  recommendProgram && recommendProgram.length > 0
                    ? recommendProgram
                    : []
                }
              />
            )}
          </InnerContainer>
        </CommonInner>
        {!writerVersion && (
          <div>
            <BackgroundLine />
            <CommonInner>
              {recommendSpotList && recommendSpotList.length > 0 && (
                <RecommendSpot resultList={recommendSpotList} />
              )}
              {recommendAccomList && recommendAccomList.length > 0 && (
                <RecommendAccom resultList={recommendAccomList} />
              )}
            </CommonInner>
            <HoneyTipButton />
          </div>
        )}
        {writerVersion && (
          <ButtonContainer>
            <RoundedButton
              $buttonColor="#AEB3B8"
              $buttonWidth="190px"
              $buttonHeight="54px"
              $hoverTextColor="rgba(255, 255, 255, 0.70)"
              onClick={handleDeleteProgram}
            >
              <B1Bold $fontColor="white">삭제하기</B1Bold>
            </RoundedButton>
            <RoundedButton
              $buttonColor="var(--color_main1)"
              $buttonWidth="190px"
              $buttonHeight="54px"
              $hoverTextColor="rgba(255, 255, 255, 0.70)"
              onClick={() => {
                navigate(`/admin/edit/${programInfoData.result.id}`);
              }}
            >
              <B1Bold $fontColor="white">수정하기</B1Bold>
            </RoundedButton>
          </ButtonContainer>
        )}
      </Container>
    );

  return null;
};

export default DetailProgram;

const Container = styled.div`
  position: relative;
  padding-bottom: 190px;
  display: flex;
  flex-direction: column;

  body:not(&) {
    background-color: white;
  }
`;

const InnerContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 44px;
  text-align: center;

  hr {
    background: var(--color_gray300);
    height: 1px;
    border: 0;
  }
`;

const Background = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  height: 800px;
  position: absolute;
  margin-top: 80px;
`;

const BackgroundLine = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  height: 12px;
  position: absolute;
  margin-top: 80px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
  margin: 135px auto;
`;
