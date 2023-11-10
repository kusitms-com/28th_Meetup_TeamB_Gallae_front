import { FilterInputType, FilterListType, Value } from '@/types';
import { useState, useEffect, useRef } from 'react';
import { DETAILED_CATEGORY_LIST } from '@/constants/Search';
import FilterButtonItem from './FilterButtonItem';
import FilterItem from './FilterItem';
import { CustomCalendar } from './CustomCalendar';

interface FilterButtonListProps {
  filterList: FilterListType[];
  filterItem: FilterListType;
  setFilterList: (newFilter: FilterListType[]) => void;
  filterInput: FilterInputType;
  setFilterInput: (input: FilterInputType) => void;
}

const FilterButtonList = ({
  filterList,
  filterItem,
  setFilterList,
  filterInput,
  setFilterInput,
}: FilterButtonListProps) => {
  const [isOpenFilterItem, setIsOpenFilterItem] = useState<boolean>(false);
  const [currentFilterTitle, setCurrentFilterTitle] = useState<string | null>(
    filterItem.title,
  );
  const filterRef = useRef<HTMLDivElement>(null);

  const [date, setDate] = useState<Value>([new Date(), new Date()]);

  useEffect(() => {
    filterInput[filterItem.enTitle] &&
      setCurrentFilterTitle(filterInput[filterItem.enTitle]);

    if (filterItem.enTitle.includes('tripDate')) {
      const start = filterInput.tripStartDate;
      const end = filterInput.tripEndDate;
      start && end && setDate([new Date(start), new Date(end)]);
    }

    if (filterItem.enTitle.includes('recruitDate')) {
      const start = filterInput.recruitStartDate;
      const end = filterInput.recruitEndDate;
      start && end && setDate([new Date(start), new Date(end)]);
    }
  }, [filterInput]);

  useEffect(() => {
    if (
      currentFilterTitle != undefined &&
      filterItem.title === '여행 프로그램'
    ) {
      const detailedCategoryList = DETAILED_CATEGORY_LIST.find(
        list => list.program === currentFilterTitle,
      )?.items;

      detailedCategoryList
        ? setFilterList(
            filterList.map(filter =>
              filter.title === '세부 카테고리'
                ? { ...filter, items: detailedCategoryList }
                : filter,
            ),
          )
        : setFilterList(
            filterList.map(filter =>
              filter.title === '세부 카테고리'
                ? { ...filter, items: [] }
                : filter,
            ),
          );
    }
  }, [currentFilterTitle]);

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current?.contains(e.target as HTMLDivElement)
      ) {
        setIsOpenFilterItem(false);
      }
    };
    document.addEventListener('mousedown', handleClose);
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  }, [isOpenFilterItem]);

  return (
    <div style={{ height: 'min-content' }} ref={filterRef}>
      <FilterButtonItem
        filterItem={filterItem}
        currentFilterTitle={currentFilterTitle}
        isOpenFilterItem={isOpenFilterItem}
        setIsOpenFilterItem={setIsOpenFilterItem}
      />
      {isOpenFilterItem && !filterItem.calendar && (
        <FilterItem
          filterItem={filterItem}
          currentFilterTitle={currentFilterTitle}
          setCurrentFilterTitle={setCurrentFilterTitle}
          filterInput={filterInput}
          setFilterInput={setFilterInput}
          setIsOpenFilterItem={setIsOpenFilterItem}
        />
      )}
      {isOpenFilterItem && filterItem.calendar && (
        <CustomCalendar
          date={date}
          setDate={setDate}
          filterInput={filterInput}
          setFilterInput={setFilterInput}
          setIsOpenFilterItem={setIsOpenFilterItem}
          fieldDate={
            filterItem.enTitle.includes('recruit')
              ? ['recruitStartDate', 'recruitEndDate']
              : ['tripStartDate', 'tripEndDate']
          }
        />
      )}
    </div>
  );
};

export default FilterButtonList;
