import MainButton from '@/components/Button/MainButton';
import { B2Bold } from '@/style/fonts/StyledFonts';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DEFAULT_PROFILE from '@/assets/image/default-profile-image.png';

interface AdminProfileProps {
  image: string;
  organization: string;
  email: string;
}

const AdminProfile = (profile: AdminProfileProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      <ProfileContainer>
        <ProfileImage>
          <img
            alt="profil-image"
            src={profile.image !== '' ? profile.image : DEFAULT_PROFILE}
          />
        </ProfileImage>
        <Profile>
          <div className="organization">{profile.organization}</div>
          <div className="email">{profile.email}</div>
        </Profile>
      </ProfileContainer>
      <MainButton
        $buttonColor="var(--color_sub3)"
        $buttonWidth="340px"
        $buttonHeight="57px"
        onClick={() => navigate('/admin/register')}
      >
        <B2Bold $fontColor="white">공고 등록</B2Bold>
      </MainButton>
    </Container>
  );
};

export default AdminProfile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProfileContainer = styled.div`
  background-color: #35393d;
  widht: 340px;
  height: 409px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 34px;
`;

const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 70%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  div {
    color: white;
    text-align: center;
    font-family: SUIT-Medium;
    font-style: normal;
  }

  .organization {
    font-size: 20px;
    line-height: 150%; /* 30px */
  }

  .email {
    font-size: 16px;
    line-height: 140%;
  }
`;
