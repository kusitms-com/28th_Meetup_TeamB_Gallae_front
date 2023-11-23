import styled from 'styled-components';
import Logo from '@/assets/icons/icon-logo.svg';
import { CommonInner } from '@/style/common';
import { MEMBER } from '@/constants/About';
import InstagramIcon from '@/assets/icons/icon-instagram.svg';

const Footer = () => {
  return (
    <Container>
      <CommonInner>
        <InnerContainer>
          <TitleContainer>
            <img width="36px" alt="로고" src={Logo} />
            <div className="title">갈래</div>
          </TitleContainer>
          <MakerContainer>
            {Object.keys(MEMBER).map(role => (
              <Role>
                <div className="role">{role}</div>
                {MEMBER[role].map(member => (
                  <div className="member">{member}</div>
                ))}
              </Role>
            ))}
          </MakerContainer>
          <Instagram href="https://www.instagram.com/travelmaker.team/">
            <img className="instagram" alt="인스타" src={InstagramIcon} />
          </Instagram>
        </InnerContainer>
      </CommonInner>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: #282828;
  height: 560px;
  width: 100%;
`;

const InnerContainer = styled.div`
  height: 420px;
  position: relative;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;
  align-items: center;
  height: 38px;

  .title {
    color: var(--main_1, #fff);
    text-align: center;
    font-family: Recipekorea;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;

    display: flex;
    align-items: center;
    padding-top: 15px;
  }
`;

const MakerContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 230px;
  margin-top: 50px;
`;

const Role = styled.div`
  width: 90px;

  .role {
    color: #9098a0;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 25.453px; /* 140% */
    letter-spacing: -0.13px;
    padding-bottom: 15px;
  }

  .member {
    color: #666b71;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 25.453px; /* 140% */
    letter-spacing: -0.13px;
    padding: 5px;
  }
`;

const Instagram = styled.a`
  width: max-content;
  padding: 14px;
  border-radius: 40px;
  border: 1px solid #edf1f7;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
