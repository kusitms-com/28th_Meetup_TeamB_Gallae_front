import styled from 'styled-components';
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineLeft,
  AiOutlineRight,
} from 'react-icons/ai';
import { useCallback } from 'react';

interface PagincationProps {
  currentPage: number; // 현재 페이지
  setPage: React.Dispatch<React.SetStateAction<number>>; // 페이지를 관리하는 상태를 바꾸는 setter
  maxPage: number; // 최대 페이지 수
}

const Pagination = ({ currentPage, setPage, maxPage }: PagincationProps) => {
  const renderPages = useCallback((): number[] => {
    if (currentPage < 5)
      return Array.from({ length: Math.min(9, maxPage) }, (_, idx) => idx + 1);
    return Array.from(
      { length: Math.min(9, maxPage - currentPage + 5) },
      (_, idx) => currentPage - 4 + idx,
    );
  }, [currentPage, maxPage]);

  const handleClick = useCallback((nextPage: number) => {
    setPage(nextPage);
  }, []);

  /* const isMorePages = useCallback((): boolean => {
    if (currentPage < 5) return maxPage > 9;
    return currentPage + 4 < maxPage;
  }, [maxPage, currentPage]); */

  const movePage = useCallback(
    (type: string): void => {
      switch (type) {
        case 'prev':
          setPage(prev => Math.max(prev - 1, 1));
          break;
        case 'next':
          setPage(prev => Math.min(prev + 1, maxPage));
          break;
      }
    },
    [maxPage],
  );

  return (
    <Container>
      <AiOutlineDoubleLeft className="icon" onClick={() => setPage(1)} />
      <AiOutlineLeft className="icon" onClick={() => movePage('prev')} />
      {renderPages().map(pageNumber => (
        <Page
          key={pageNumber}
          $active={currentPage === pageNumber}
          onClick={() => handleClick(pageNumber)}
        >
          {pageNumber}
        </Page>
      ))}
      <AiOutlineRight className="icon" onClick={() => movePage('next')} />
      <AiOutlineDoubleRight className="icon" onClick={() => setPage(maxPage)} />
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  gap: 16px;

  font-family: SUIT-Regular;
  font-style: normal;
  font-weight: 600;
  color: var(--grey-700, #53575c);

  .icon {
    width: 25px;
    height: 25px;
    padding: 2.5px;
    cursor: pointer;
  }
`;

const Page = styled.div<{ $active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-radius: 50%;
  cursor: pointer;

  width: 25px;
  height: 25px;
  color: ${props => (props.$active ? 'white' : 'var(--grey-700, #53575c)')};
  background-color: ${props =>
    props.$active ? 'var(--color_main1)' : 'transparent'};
`;
