import { B2 } from '@/style/fonts/StyledFonts';
import React from 'react';
import styled from 'styled-components';
import EditIcon from '@/assets/icons/icon-edit.svg';
import DeleteIcon from '@/assets/icons/icon-delete.svg';
import { useNavigate } from 'react-router-dom';
import { deletePosting } from '@/apis/posting';

const EditDelete: React.FC<{ writeType: string; id: number }> = ({
  writeType,
  id,
}) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/${writeType}/edit/${id}`);
  };
  const handleDelete = () => {
    if (
      window.confirm(
        '정말 삭제하시겠습니까?\n삭제된 데이터는 복구되지 않습니다.',
      )
    )
      deletePosting(writeType, id);
  };
  return (
    <Container>
      <InnerContainer onClick={handleEdit}>
        <B2 $fontColor="#53575C">수정</B2>
        <img src={EditIcon} alt="edit" />
      </InnerContainer>
      <Seperator />
      <InnerContainer onClick={handleDelete}>
        <B2 $fontColor="#53575C">삭제</B2>
        <img src={DeleteIcon} alt="edit" />
      </InnerContainer>
    </Container>
  );
};

export default EditDelete;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;

  &:hover {
    pre {
      color: #0e86f4;
    }
    scale: 1.3;
  }
`;

const Seperator = styled.div`
  width: 1px;
  height: 17px;
  background: #53575c;
`;
