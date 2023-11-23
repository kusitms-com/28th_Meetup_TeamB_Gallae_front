// 메인페이지
import styled from 'styled-components';
import Banner from './Banner';
import PageNav from './PageNav';
import Promotion from './Promotion';
import HotProgram from './HotProgram';
import Uploaded from './Uploaded';
import Footer from '@/components/Footer/Footer';

const Main = () => {
  return (
    <>
      <Container>
        <Banner />
        <PageNav />
        <Uploaded />
        <Promotion />
        <HotProgram />
      </Container>
      <Footer />
    </>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  gap: 120px;

  body:not(&) {
    background-color: white;
  }
`;
