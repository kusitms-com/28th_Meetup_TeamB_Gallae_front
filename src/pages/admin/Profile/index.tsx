import { CommonInner } from '@/style/common';
import styled from 'styled-components';
import { B1, B1Bold, B3Bold } from '@/style/fonts/StyledFonts';
import MainButton from '@/components/Button/MainButton';
import UserTitle from '@/components/Title/UserTitle';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '@/recoil/LoginAtom';
import AuthBadge from '@/components/Badge/AuthBadge';
import { ADMIN_INFO_TAG } from '@/constants/Admin';

const AdminProfile = () => {
  const adminInfo = useRecoilValue(UserAtom);

  return (
    <CommonInner>
      <Container>
        <UserTitle>회원정보</UserTitle>
        <div className="information-container">
          <MainButton
            $buttonColor="var(--color_sub3)"
            $buttonWidth="108px"
            $buttonHeight="38px"
          >
            <B3Bold $fontColor="white">수정</B3Bold>
          </MainButton>
          <InfoContainer>
            {Object.keys(ADMIN_INFO_TAG).map(key => (
              <Information key={key}>
                <B1Bold $fontColor="var(--color_gray900)" className="title">
                  {ADMIN_INFO_TAG[key]}
                </B1Bold>
                <div className="content">
                  <B1 $fontColor="var(--color_gray900)">
                    {adminInfo[key] === null ? '' : adminInfo[key]}
                  </B1>
                  {key === 'email' &&
                    (adminInfo[key] !== null || adminInfo[key] !== '') && (
                      <AuthBadge />
                    )}
                </div>
              </Information>
            ))}
          </InfoContainer>
        </div>
      </Container>
    </CommonInner>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 120px;
  margin-bottom: 180px;

  body:not(&) {
    background-color: white;
  }

  .information-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-end;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  border-radius: 20px;
  background-color: #fafafa;
  width: 1200px;
  padding: 93px 157px;
`;

const Information = styled.div`
  display: flex;
  flex-direction: row;

  .title {
    width: 190px;
  }

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`;

export default AdminProfile;
