import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import SearchImage from '@/assets/icons/icon-search.svg';

interface Props {
  placeHolder: string;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
}

const SearchBar: React.FC<Props> = ({
  placeHolder,
  searchInput, // input을 저장하는 state
  setSearchInput, // state를 변경하는 setter
  handleSubmit, // 돋보기 버튼을 눌렀을 때 수행할 함수
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  return (
    <Container
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Input
        value={searchInput}
        placeholder={placeHolder}
        onChange={onChange}
      />
      <button type="submit">
        <img src={SearchImage} alt="search" />
      </button>
    </Container>
  );
};

export default SearchBar;

const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  padding: 15px 24px;
  flex-shrink: 0;

  border-radius: 40px;
  border: 1px solid #e9e9e9;
  background: var(--main_1, #fff);

  /* 검색창 그림자 */
  box-shadow: 0px 40px 80px 0px rgba(238, 238, 238, 0.4);

  button {
    display: flex;

    img {
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;

  border: none;

  color: #15191d;

  /* Body 01 */
  font-family: 'SUIT-Regular';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */

  &:placeholder {
    color: var(--grey-600, #666b6f);
  }
`;
