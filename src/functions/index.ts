import { NavigateFunction } from 'react-router-dom';

export const handleClickSearchProgram = (
  searchInput: string,
  setSearchInput: React.Dispatch<React.SetStateAction<string>>,
  navigate: NavigateFunction,
) => {
  // 검색 후 페이지 이동
  console.log('@@@@');
  navigate(`/search?keyword=${searchInput}`);
  setSearchInput('');
};
