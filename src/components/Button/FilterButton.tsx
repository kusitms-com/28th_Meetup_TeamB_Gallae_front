import styled from 'styled-components';

interface FilterButtonProps {
  children: React.ReactNode;
  active: boolean;
  handleClick: () => void;
}

const FilterButton = ({ children, active, handleClick }: FilterButtonProps) => {
  return (
    <Wrapper $active={active} onClick={handleClick}>
      {children}
    </Wrapper>
  );
};

export default FilterButton;

const Wrapper = styled.div<{ $active: boolean }>`
  background-color: ${props =>
    props.$active ? 'var(--color_main1)' : 'var(--color_background)'};
  border-radius: 40px;
  padding: 16px 40px;
  cursor: pointer;

  color: ${props => (props.$active ? 'white' : '#53575C')};
  font-family: SUIT-Medium;
  font-size: 16px;
  font-style: normal;
  line-height: 140%; /* 22.4px */
  text-align: center;
`;
