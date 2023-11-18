import { SignUpProps } from '@/types';
import React from 'react';
import styled from 'styled-components';
import InputText from '../components/InputText';
import { GeneralUserData } from '@/constants/signup';
import DupCheckButton from '@/components/Button/DupCheckButton';
import InputFile from '../components/InputFile';

const GeneralUser: React.FC<SignUpProps> = ({
  inputData,
  setInputData,
  profile,
  setProfile,
}) => {
  return (
    <Container>
      {GeneralUserData.map((dataArr, idx) => (
        <InnerContainer key={dataArr[0].title}>
          {idx === 2 && (
            <InputFile
              key={idx}
              title="프로필"
              isEssential={false}
              profile={profile}
              setProfile={setProfile}
              placeholder="프로필 사진을 입력해주세요."
            />
          )}
          {dataArr.map((info, idx) => (
            <FlexBox key={idx}>
              <InputText
                key={info?.title}
                {...info}
                inputData={inputData}
                setInputData={setInputData}
                alertMessage={info?.alertMessage ? info?.alertMessage : ''}
                isAlert={
                  info?.checkIsAlert && inputData[info.keyName]
                    ? info?.checkIsAlert(
                        inputData[info.keyName] || '',
                        inputData?.password || '',
                      )
                    : false
                }
              />
              {(info.keyName === 'id' || info.keyName === 'nickname') && (
                <DupCheckButton
                  key={info.keyName}
                  keyName={info.keyName}
                  value={inputData[info.keyName] || ''}
                />
              )}
            </FlexBox>
          ))}
        </InnerContainer>
      ))}
    </Container>
  );
};

export default GeneralUser;

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 80px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  gap: 20px;
`;
