import { GALLAE_INTRODUCTION, GALLAE_TITLE } from '@/constants/About';
import { CommonInner } from '@/style/common';
import { H0 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';
import Image from '@/assets/about/about.png';

const Gallae = () => {
  return (
    <CommonInner>
      <Container>
        <TitleContainer>
          <div className="title">
            {GALLAE_TITLE.title.map(text => (
              <H0 key={text} $fontColor="black">
                {text}
              </H0>
            ))}
          </div>
          <img alt="소개 이미지" src={Image} />
          <div>
            {GALLAE_TITLE.gallae.map(text => (
              <div key={text} className="description">
                {text}
              </div>
            ))}
          </div>
        </TitleContainer>
        <ContentContainer>
          {Object.keys(GALLAE_INTRODUCTION).map(key => (
            <div
              key={GALLAE_INTRODUCTION[key].title}
              className="content-container"
            >
              <TitleTag>{GALLAE_INTRODUCTION[key].title}</TitleTag>
              <SubTitle>{GALLAE_INTRODUCTION[key].subTitle}</SubTitle>
              <div className="content">
                {GALLAE_INTRODUCTION[key].content.map((item, index) => (
                  <Content
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item }}
                  ></Content>
                ))}
              </div>
            </div>
          ))}
        </ContentContainer>
      </Container>
    </CommonInner>
  );
};

export default Gallae;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;

  margin-top: 212px;
  margin-bottom: 268px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .description {
    color: var(--grey-700, #53575c);
    font-family: SUIT-Bold;
    font-size: 24px;
    font-style: normal;
    line-height: 160%; /* 38.4px */
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 120px;

  body:not(&) {
    background-color: white;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const TitleTag = styled.div`
  border-radius: 10px;
  background-color: #e9f4ff;
  padding: 8px 16px;
  width: max-content;

  color: var(--color_main1);
  font-family: SUIT-Bold;
  font-size: 20px;
  font-style: normal;
  line-height: 150%; /* 30px */
`;

const SubTitle = styled.div`
  color: black;

  font-family: SUIT-Bold;
  font-size: 28px;
  font-style: normal;
  line-height: 150%; /* 42px */
`;

const Content = styled.div`
  color: var(--grey-700, #53575c);
  font-family: SUIT-Medium;
  font-size: 18px;
  font-style: normal;
  line-height: 140%; /* 25.2px */
`;
