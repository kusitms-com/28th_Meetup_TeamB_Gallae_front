// 맨 처음 보여지는 메인화면
import styled from 'styled-components';
import { B1 } from '../../style/fonts/StyledFonts';

const Main = () => {
  return (
    <>
      <div>Main</div>
      <B1 $fontColor={'blue'}>Main</B1>
      <Test>Main</Test>
    </>
  );
};

export default Main;

const Test = styled.pre`
  font-family: sans-serif;
  font-size: 64px;
`;
