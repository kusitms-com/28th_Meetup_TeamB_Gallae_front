import { NavigateFunction } from 'react-router-dom';

export const handleClickSearchProgram = (
  searchInput: string,
  setSearchInput: React.Dispatch<React.SetStateAction<string>>,
  navigate: NavigateFunction,
) => {
  // 검색 후 페이지 이동
  navigate(`/search?keyword=${searchInput}`);
  setSearchInput('');
};

export const handleClickSearchMap = (
  searchInput: string,
  setSearchInput: React.Dispatch<React.SetStateAction<string>>,
  setSearhFilter: React.Dispatch<React.SetStateAction<string>>,
) => {
  // 검색 후 페이지 이동
  setSearhFilter(searchInput);
  setSearchInput('');
};
