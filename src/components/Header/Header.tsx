import { HeaderData } from '@/constants/Header';
import { B1, H3 } from '@/style/fonts/StyledFonts';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <InnerContainer>
        <NavBarContainer>
          {HeaderData.map(({ main, dropDowns }) => (
            <NavBar>
              <H3 $fontColor="#15191D">{main}</H3>
              <Dropdown>
                {dropDowns.map(({ title, link }) => (
                  <li>
                    <Link to={link}>
                      <B1 $fontColor="#15191D">{title}</B1>
                    </Link>
                  </li>
                ))}
              </Dropdown>
            </NavBar>
          ))}
        </NavBarContainer>
        <img src="/src/assets/icons/user-icon.svg" alt="user" />
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
  padding: 16px 312px;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
  background-color: #fff;

  position: fixed;
  z-index: 3;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

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

  position: relative;

  &:after {
    display: block;
    content: '';
    clear: both;
  }
`;

const NavBar = styled.li`
  position: relative;
  width: 140px;
  height: 100%;

  text-align: center;

  cursor: pointer;

  &:hover {
    > ul {
      display: block;
    }
  }
`;

const Dropdown = styled.ul`
  display: none;
  text-align: center;

  border-radius: 20px;
  background: var(--main_1, #fff);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  position: absolute;
  top: 36px;
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
