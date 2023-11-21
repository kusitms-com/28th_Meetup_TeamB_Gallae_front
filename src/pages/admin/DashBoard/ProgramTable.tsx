import styled from 'styled-components';
import IconTrash from '@/assets/icons/icon-trash.svg';
import { useNavigate } from 'react-router-dom';
import { ProgramManagingType } from '@/types';
import { ManagerAPI } from '@/apis/manager';

interface ProgramTableProps {
  noDataText: string;
  programList: ProgramManagingType[];
}

const ProgramTable = ({ noDataText, programList }: ProgramTableProps) => {
  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    if (window.confirm('공고를 삭제하시겠습니까?')) {
      ManagerAPI.deleteProgram(id).then(() =>
        window.alert('공고가 삭제되었습니다.'),
      );
    }
  };

  return (
    <TableContainer>
      <thead>
        <TableLine>
          <td width="360px">제목</td>
          <td width="120px">조회수</td>
          <td width="120px">찜</td>
          <td width="120px">시작일</td>
          <td width="120px">마감일</td>
          <td width="32px">{programList.length > 0 ? '삭제' : ''}</td>
        </TableLine>
      </thead>
      {programList.length > 0 ? (
        <tbody>
          {programList.map(program => (
            <TableLine
              key={program.id}
              onClick={() => {
                navigate(`/detailProgram/${program.title}/${program.id}`);
              }}
            >
              <td width="360px">{program.title}</td>
              <td width="120px">{program.viewCount}</td>
              <td width="120px">{program.like}</td>
              <td width="120px">{program.recruitStartDate}</td>
              <td width="120px">{program.recruitEndDate}</td>
              <td width="32px" className="icon">
                <img
                  alt="icon-trash"
                  src={IconTrash}
                  onClick={() => {
                    handleDelete(program.id);
                  }}
                />
              </td>
            </TableLine>
          ))}
        </tbody>
      ) : (
        <Text>
          <tr>
            <td>{noDataText}</td>
          </tr>
        </Text>
      )}
    </TableContainer>
  );
};

export default ProgramTable;

const TableContainer = styled.table`
  color: #53575c;
  font-family: SUIT-SemiBold;
  font-size: 18px;
  font-style: normal;
  line-height: 25px;
  height: 434px;
  margin: 24px 0px;
`;

const TableLine = styled.tr`
  display: flex;
  flex-direction: row;
  gap: 80px;
  text-align: left;
  padding: 23px 14px;
  border-bottom: 1px solid #e3e7ed;
  cursor: pointer;

  td {
    height: 25px;
  }

  .icon {
    text-align: center;

    img {
      cursor: pointer;
    }
  }
`;

const Text = styled.tbody`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  font-family: SUIT-SemiBold;
  font-size: 18px;
  font-style: normal;
  line-height: 140%; /* 25.2px */

  td {
    color: #aeb3b8;
  }
`;
