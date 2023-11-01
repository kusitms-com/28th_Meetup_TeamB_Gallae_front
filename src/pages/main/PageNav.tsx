import SearchBar from '@/components/SearchBar/SearchBar';
import { useState } from 'react';
import styled from 'styled-components';
import NavCard from './components/NavCard';
import { NavData } from '@/constants/main';

const PageNav = () => {
  const [searchInput, setSearchInput] = useState('');
  const handleSearch = () => {};
  return (
    <Container>
      <SearchBarWrapper>
        <SearchBar
          placeHolder="어디로 떠나고 싶으신가요?"
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleClick={handleSearch}
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

  width: 100%;
  padding: 0 360px;

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
