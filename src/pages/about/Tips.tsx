import { TIPS } from '@/constants/About';
import { CommonInner } from '@/style/common';
import { H2 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';
import HoneyTip from '@/assets/icons/icon-honey-tip.png';
import Footer from '@/components/Footer/Footer';

const Tips = () => {
  return (
    <>
      <Container>
        <CommonInner>
          <img className="honey-tip" alt="" src={HoneyTip} />
          <H2 $fontColor="#15191d">
            👉 선정될 수 있는 지원서 작성 꿀팁을 알려드릴게요!
          </H2>
          <TipContainer>
            {TIPS.map(tip => (
              <TipCard key={tip.title}>
                <TitleTag>{tip.title}</TitleTag>
                <div className="description">{tip.description}</div>
              </TipCard>
            ))}
          </TipContainer>
        </CommonInner>
      </Container>
      <Footer />
    </>
  );
};

export default Tips;

const Container = styled.div`
  margin-top: 219px;
  margin-bottom: 224px;
  body:not(&) {
    background-color: var(--color_background);
  }

  .honey-tip {
    margin-bottom: 40px;
  }
`;

const TipContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 36px 32px;
  margin-top: 40px;
`;

const TipCard = styled.div`
  border-radius: 20px;
  border: 0.5px solid var(--grey-200, #e3e7ed);
  background: var(--main_1, #fff);
  padding: 40px 56px;
  width: 682px;
  height: 332px;

  .description {
    margin-top: 32px;
    color: var(--grey-700, #53575c);
    font-family: SUIT-Medium;
    font-size: 18px;
    font-style: normal;
    line-height: 160%; /* 28.8px */
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
