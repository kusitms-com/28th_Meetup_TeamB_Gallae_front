import { B2Bold } from '@/style/fonts/StyledFonts';
import { PostingType } from '@/types';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Posting: React.FC<PostingType> = ({
  boardName,
  title,
  id,
  nickName,
  registerDate,
}) => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(`${id}`);
  };

  return (
    <Container>
      <B2Bold $fontColor="#53575C" className="board_name">
        {boardName}
      </B2Bold>
      <B2Bold $fontColor="#53575C" className="title" onClick={handleClick}>
        {title}
      </B2Bold>
      <B2Bold $fontColor="#53575C" className="writer">
        {nickName}
      </B2Bold>
      <B2Bold $fontColor="#53575C">{registerDate}</B2Bold>
    </Container>
  );
};

export default Posting;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  padding: 32px 14px;

  .board_name {
    width: 64px;
  }
  .title {
    width: 580px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; // 너비를 넘어가면 ...으로 표시되도록

    cursor: pointer;

    &:hover {
      color: #3ea2ff;
    }
  }
  .writer {
    width: 140px;
    text-align: center;
  }
`;
