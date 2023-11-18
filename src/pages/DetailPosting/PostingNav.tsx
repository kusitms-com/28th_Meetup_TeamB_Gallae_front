import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { B3 } from '@/style/fonts/StyledFonts';

interface Props {
  prevId: number; // 이전 글의 id
  nextId: number; // 다음 글의 id
}

const PostingNav: React.FC<Props> = ({ prevId, nextId }) => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const route = currentPath.split('/')[1];

  const handleNavigate = (id: number): void => {
    navigate(`/${route}/${id}`);
  };
  const navToList = (): void => {
    navigate(`/${route}`);
  };

  return (
    <Container>
      <Button buttoncolor="#E3E7ED" onClick={() => handleNavigate(prevId)}>
        <AiOutlineLeft />
        <B3 $fontColor="#53575C">이전글</B3>
      </Button>
      <Button buttoncolor="#E3E7ED" onClick={() => handleNavigate(nextId)}>
        <B3 $fontColor="#53575C">다음글</B3>
        <AiOutlineRight />
      </Button>
      <Button
        buttoncolor="#FF7D2C"
        style={{ marginLeft: '16px' }}
        onClick={navToList}
      >
        <GiHamburgerMenu style={{ color: '#fff' }} />
        <B3 $fontColor="#fff">목록</B3>
      </Button>
    </Container>
  );
};

export default PostingNav;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  gap: 24px;
`;

const Button = styled.div<{ buttoncolor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 140px;
  padding: 12px 40px;
  gap: 4px;

  border-radius: 40px;
  background: ${({ buttoncolor }) => buttoncolor};

  cursor: pointer;
`;
