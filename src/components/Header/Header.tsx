import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { HeaderData, UserDropdown } from '@/constants/Header';
import { B1, H3 } from '@/style/fonts/StyledFonts';
import UserIcon from '@/assets/icons/user-icon.svg';
import RoundedButton from '../Button/RoundedButton';
import { UserAtom } from '@/recoil/LoginAtom';

const Header = () => {
  const [isLogined, setIsLogined] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useRecoilState(UserAtom);

  const navigate = useNavigate();

  const handleLogout = () => {
    // logout
    // 저장하고 있던 사용자 정보 초기화
    console.log(userInfo);
    setUserInfo({
      id: -1,
      email: '',
      phoneNumber: '',
      name: '',
      nickName: '',
    });
    setTimeout(() => {
      setIsLogined(false);
    }, 1000);
  };

  const handleToLogin = () => {
    navigate('/login');
  };

  useEffect(() => {
    if (userInfo?.id != -1) setIsLogined(true);
  }, [userInfo]);

  return (
    <Container>
      <InnerContainer>
        {/* 헤더 좌측 */}
        <NavBarContainer>
          {HeaderData.map(({ main, dropDowns }) => (
            <NavBar key={main}>
              <H3 $fontColor="#15191D">{main}</H3>
              <Dropdown>
                {dropDowns.map(({ title, link }, index) => (
                  <li key={index}>
                    <Link to={link} state={{ filter: title }}>
                      <B1 $fontColor="#15191D">{title}</B1>
                    </Link>
                  </li>
                ))}
              </Dropdown>
            </NavBar>
          ))}
        </NavBarContainer>

        {/* 헤더 우측 (유저 아이콘) */}
        <NavBarContainer>
          {isLogined ? (
            <NavBar>
              <img src={UserIcon} alt="user" />
              <Dropdown>
                {UserDropdown.map(({ title, link }, index) => (
                  <li key={index} className={`${title}`}>
                    <Link to={link} state={{ filter: title }}>
                      <B1 $fontColor="#15191D">{title}</B1>
                    </Link>
                  </li>
                ))}
                <Seperator />
                <li onClick={handleLogout}>
                  <B1 $fontColor="#15191D">{'로그아웃'}</B1>
                </li>
              </Dropdown>
            </NavBar>
          ) : (
            <RoundedButton
              $buttonColor="#35393D"
              $buttonWidth="109px"
              $buttonHeight="40px"
              $hoverTextColor="#fff"
              onClick={handleToLogin}
              children={<B1 $fontColor="#fff">로그인</B1>}
            />
          )}
        </NavBarContainer>
      </InnerContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  padding: 0px 312px;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
  background-color: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);

  position: fixed;
  top: 0;
  z-index: 4;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  img {
    width: 49px;
    height: 49px;

    cursor: pointer;
  }
`;

const NavBarContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  position: relative;

  &:after {
    display: block;
    content: '';
    clear: both;
  }
`;

const NavBar = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  width: 140px;
  height: 100%;

  text-align: center;

  cursor: pointer;

  &:hover {
    > ul {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`;

const Dropdown = styled.ul`
  display: none;
  text-align: center;

  border-radius: 20px;
  background: var(--main_1, #fff);
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));

  position: absolute;
  top: 80px;
  left: -30px;

  width: 200px;
  padding: 8px 0px;

  pre {
    width: 100%;
    padding: 9px 16px 9px 16px;

    &:hover {
      color: #0e86f4;
    }
  }
`;

const Seperator = styled.div`
  width: 180px;
  height: 0.5px;
  background: #e3e7ed;
`;
