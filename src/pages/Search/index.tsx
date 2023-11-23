import { CommonInner } from '@/style/common';
import styled from 'styled-components';
import MapButton from './MapButton';
import SearchResult from './SearchResult';
import FilterBar from './FilterBar';
import { useEffect, useState } from 'react';
import { FilterInputType } from '@/types';
import { DEFAULT_FILTER_LIST } from '@/constants/Search';
import ProgramSearchBar from './ProgramSearchBar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetSearchProgram } from '@/apis/program';
import Footer from '@/components/Footer/Footer';

interface Test {
  [key: string]: string | number | undefined | null;
  programName?: string;
  orderCriteria?: string;
  location?: string | null;
  programType?: string;
  detailType?: string;
  recruitStartDate?: string;
  recruitEndDate?: string;
  activeStartDate?: string;
  activeEndDate?: string;
  size?: number;
}

const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState<string>('');
  const [filterInput, setFilterInput] =
    useState<FilterInputType>(DEFAULT_FILTER_LIST);
  const [apiData, setApiData] = useState<Test | null>(null);
  const navigate = useNavigate();
  const { data: searchData, refetch: getSearchRefetch } =
    useGetSearchProgram(apiData);

  useEffect(() => {
    let newApiData: Test = { size: 100 };
    let newFilterInput = filterInput;

    const keyword = searchParams.get('keyword');
    if (keyword) {
      setSearchInput(keyword);
      newApiData['programName'] = keyword;
    } else {
      setSearchInput('');
      newApiData['programName'] = '';
    }

    for (const key in newFilterInput) {
      const data = searchParams.get(key);
      newFilterInput[key] = data;

      if (data && data !== '전체') {
        newApiData[key] = data;
      }
    }

    if (!newApiData['orderCriteria'])
      newApiData['orderCriteria'] = '늦은 마감 순';
    if (newApiData['location'] === '전국') newApiData['location'] = null;

    setFilterInput({ ...newFilterInput });

    setApiData(newApiData);
  }, [searchParams]);

  useEffect(() => {
    if (apiData) {
      getSearchRefetch();
    }
  }, [apiData]);

  const handleSubmit = () => {
    let searchPath = '';
    for (const key in filterInput) {
      if (filterInput[key] && filterInput[key] !== '세부 카테고리')
        searchPath += `&${key}=${filterInput[key]}`;
    }
    navigate(`/search?keyword=${searchInput}${searchPath}`);
  };

  return (
    <>
      <CommonInner>
        <Container>
          <ProgramSearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            handleSubmit={handleSubmit}
          />
          <FilterBar
            filterInput={filterInput}
            setFilterInput={setFilterInput}
            handleSubmit={handleSubmit}
          />
          <SearchResult
            keyword={searchParams.get('keyword')}
            searchParams={searchParams}
            programCount={searchData ? searchData.length : 0}
            programList={searchData}
          />
          <MapButton />
        </Container>
      </CommonInner>
      <Footer />
    </>
  );
};

const Container = styled.div`
  padding-top: 180px;
  padding-bottom: 170px;
  position: relative;
  min-height: calc(var(--vh, 1vh) * 100 * 100 / 75 - 80px);

  body:not(&) {
    background-color: white;
  }
`;

export default Search;
