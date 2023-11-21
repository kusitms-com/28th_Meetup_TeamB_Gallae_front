import styled from 'styled-components';

const UserTitle = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default UserTitle;

const Wrapper = styled.div`
  color: var(--color_gray-900);
  font-family: Recipekorea;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
