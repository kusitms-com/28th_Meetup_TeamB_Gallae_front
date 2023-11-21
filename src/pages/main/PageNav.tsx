import SearchBar from '@/components/SearchBar/SearchBar';
import { useState } from 'react';
import styled from 'styled-components';
import NavCard from './components/NavCard';
import { NavData } from '@/constants/main';
import { handleClickSearchProgram } from '@/functions';
import { useNavigate } from 'react-router-dom';

const PageNav = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  return (
    <Container>
      <SearchBarWrapper>
        <SearchBar
          placeHolder="어디로 떠나볼까요?"
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSubmit={() =>
            handleClickSearchProgram(searchInput, setSearchInput, navigate)
          }
        />
      </SearchBarWrapper>
      <NavContainer>
        {NavData.map((props, index) => (
          <NavCard {...props} key={index} />
        ))}
      </NavContainer>
    </Container>
  );
};

export default PageNav;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1440px;
  margin: auto;
  gap: 120px;
`;

const SearchBarWrapper = styled.div`
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 80px;

  margin: auto;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
