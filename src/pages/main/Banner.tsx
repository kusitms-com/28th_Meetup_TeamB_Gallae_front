import { B2 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';
import BannerText from '@/assets/main/banner_text.svg';
import BannerImage from '@/assets/main/banner_image.svg';

const Banner = () => {
  return (
    <Container>
      <InnerContainer>
        <LeftBox>
          <img src={BannerText} alt="갈래?" />
          <Button>
            <B2 $fontColor="#fff">자세히보기</B2>
          </Button>
        </LeftBox>
        <RightBox>
          <img src={BannerImage} alt="banner" />
        </RightBox>
      </InnerContainer>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 880px;
  background: linear-gradient(180deg, #47a6ff 0%, #2697ff 100%);
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1440px;
  margin: auto;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

const RightBox = styled.div`
  img {
    width: 931px;
    height: 931px;
    flex-shrink: 0;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 175px;
  padding: 16px 48px;

  border-radius: 40px;
  border: 1px solid var(--main_1, #fff);

  cursor: pointer;
`;
