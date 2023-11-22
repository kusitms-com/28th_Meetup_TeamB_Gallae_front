import MainButton from '@/components/Button/MainButton';
import { B2Bold } from '@/style/fonts/StyledFonts';
import { WishlistFilterType } from '@/types';
import styled from 'styled-components';
import { WISHLIST_FILTER_LIST } from '@/constants/User/wishlist';
import FilterItem from './FilterItem';

interface FilterBarProps {
  filterInput: WishlistFilterType;
  //setFilterInput: (input: WishlistFilterType) => void;
  handleChangeFilterInput: (itemTitle: string, itemInput: string) => void;
  handleSubmit: () => void;
}

const FilterBar = ({
  filterInput,
  handleChangeFilterInput,
  handleSubmit,
}: FilterBarProps) => {
  //const [filterList, setFilterList] = useState<FilterListType[]>(FILTER_LIST);

  return (
    <Container>
      <FilterButtonContainer>
        {Object.keys(WISHLIST_FILTER_LIST).map(filterItem => (
          <FilterItem
            key={filterItem}
            filterItemTitle={filterItem}
            filterItem={WISHLIST_FILTER_LIST[filterItem]}
            filterInput={filterInput}
            handleChangeFilterInput={handleChangeFilterInput}
          />
        ))}
      </FilterButtonContainer>
      <MainButton
        $buttonColor="var(--color_sub3)"
        $buttonWidth="112px"
        $buttonHeight="40px"
        onClick={handleSubmit}
      >
        <B2Bold $fontColor="white">선택</B2Bold>
      </MainButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;

  gap: 34px;
  margin: 25px;
  margin-right: auto;
  padding: 40px 0px;
  margin-bottom: 64px;
  z-index: 1;
`;

const FilterButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export default FilterBar;
