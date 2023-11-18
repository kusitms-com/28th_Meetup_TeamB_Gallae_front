import ProgramCard from '@/components/ProgramCard/ProgramCard';
import { H1 } from '@/style/fonts/StyledFonts';
import { ProgramMainInfoType } from '@/types';
import styled from 'styled-components';

interface SearchResultProps {
  keyword: string | null;
  searchParams: URLSearchParams;
  programCount: number;
  programList: ProgramMainInfoType[];
}

const SearchResult = ({
  keyword,
  searchParams,
  programCount,
  programList,
}: SearchResultProps) => {
  if (!keyword && searchParams.get('program')) {
    return (
      <>
        <ResultHeader>
          <H1 $fontColor="var(--color_gray900)">{`전체 `}</H1>
          {searchParams.get('program') && (
            <H1 $fontColor="var(--color_gray900)">
              {searchParams.get('program')}
            </H1>
          )}
          <H1 $fontColor="var(--color_sub3)">{` ${programCount}`}</H1>
          <H1 $fontColor="var(--color_gray900)">{`건`}</H1>
        </ResultHeader>
        <ProgramCard programList={programList} />
      </>
    );
  }
  return (
    <>
      <ResultHeader>
        {(searchParams.get('recruitStartDate') ||
          searchParams.get('tripStartDate')) && (
          <H1 $fontColor="var(--color_gray900)">{'선택하신 기간의 '}</H1>
        )}
        {searchParams.get('location') && (
          <H1 $fontColor="var(--color_gray900)">{`${searchParams.get(
            'location',
          )} `}</H1>
        )}
        {searchParams.get('program') && (
          <H1 $fontColor="var(--color_gray900)">{`${searchParams.get(
            'program',
          )} `}</H1>
        )}
        {keyword && <H1 $fontColor="var(--color_gray900)">{`${keyword} `}</H1>}
        <H1 $fontColor="var(--color_gray900)">{`검색 결과`}</H1>
        <H1 $fontColor="var(--color_sub3)">{` ${programCount}`}</H1>
        <H1 $fontColor="var(--color_gray900)">{`건`}</H1>
      </ResultHeader>
      <ProgramCard programList={programList} />
    </>
  );
};

const ResultHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 184px;
  margin-bottom: 65px;
`;
export default SearchResult;
