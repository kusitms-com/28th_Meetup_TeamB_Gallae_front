import styled from 'styled-components';

import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi';
import { B2Bold } from '@/style/fonts/StyledFonts';
import { useCallback } from 'react';

interface Props {
  page: number; // 현재 페이지
  setPage: React.Dispatch<React.SetStateAction<number>>; // 페이지를 관리하는 상태를 바꾸는 setter
  maxPage: number; // 최대 페이지 수
}

const PageBar: React.FC<Props> = ({ page, setPage, maxPage }) => {
  const renderPages = useCallback((): number[] => {
    if (page < 5)
      return Array.from({ length: Math.min(9, maxPage) }, (_, idx) => idx + 1);
    return Array.from(
      { length: Math.min(9, maxPage - page + 5) },
      (_, idx) => page - 4 + idx,
    );
  }, [page, maxPage]);

  const handleClick = useCallback((nextPage: number) => {
    setPage(nextPage);
  }, []);

  const isMorePages = useCallback((): boolean => {
    if (page < 5) return maxPage > 9;
    return page + 4 < maxPage;
  }, [maxPage, page]);

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
    <>
      {maxPage > 0 && (
        <Container>
          <HiOutlineChevronDoubleLeft className="icon" />
          <HiOutlineChevronLeft
            className="icon"
            onClick={() => movePage('prev')}
          />
          {renderPages().map(pageNumber => (
            <PageWrapper
              selected={page === pageNumber}
              onClick={() => handleClick(pageNumber)}
              key={pageNumber}
            >
              <B2Bold $fontColor={page === pageNumber ? '#FFF' : '#000'}>
                {pageNumber}
              </B2Bold>
            </PageWrapper>
          ))}
          {isMorePages() && <B2Bold $fontColor="#000">...</B2Bold>}
          <HiOutlineChevronRight
            className="icon"
            onClick={() => movePage('next')}
          />
          <HiOutlineChevronDoubleRight className="icon" />
        </Container>
      )}
    </>
  );
};

export default PageBar;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  gap: 16px;

  font-family: SUIT-Regular;
  font-style: normal;

  .icon {
    width: 25px;
    height: 25px;
    padding: 2.5px;
    cursor: pointer;
  }
`;

interface PageWrapperProps {
  selected: boolean;
}

const PageWrapper = styled.div<PageWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25px;
  height: 25px;
  font-size: 18px;

  border-radius: 50%;
  background: ${({ selected }) =>
    selected ? 'var(--Main_1, #3ea2ff)' : 'none'};

  cursor: pointer;
`;
