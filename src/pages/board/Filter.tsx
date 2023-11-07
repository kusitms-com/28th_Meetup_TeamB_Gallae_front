import { B2 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

interface Props {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filterList: string[];
}

const Filter: React.FC<Props> = ({ filter, setFilter, filterList }) => {
  const handleClick = (item: string): void => {
    setFilter(item);
  };

  return (
    <Container>
      {filterList.map((list, idx) => (
        <Button
          selected={list === filter}
          key={idx}
          onClick={(): void => handleClick(list)}
        >
          <B2 $fontColor={list === filter ? '#FFF' : '#53575C'}>{list}</B2>
        </Button>
      ))}
    </Container>
  );
};

export default Filter;

const Container = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;

  gap: 35px;
`;

interface ButtonProps {
  selected: boolean;
}

const Button = styled.div<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 16px 40px;
  gap: 8px;

  border-radius: 40px;
  background: ${({ selected }) =>
    selected ? 'var(--Main_1, #3ea2ff)' : 'var(--background, #F6F6F6)'};

  cursor: pointer;
`;
