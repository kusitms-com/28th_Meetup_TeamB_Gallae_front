import { handleDownload } from '@/apis/attatchment';
import { B1 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

const Attatchment: React.FC<{ fileSrc: string; fileName: string }> = ({
  fileSrc, // 파일 link (Amazon S3)
  fileName, // 파일 이름
}) => {
  return (
    <Container>
      <B1 $fontColor="#53575C">첨부파일</B1>
      <B1
        $fontColor="#666B6F"
        onClick={() => handleDownload(fileSrc, fileName)}
      >
        {fileName}
      </B1>
    </Container>
  );
};

export default Attatchment;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 64px;

  padding: 17px 40px;

  border-radius: 20px;
  border: 1px solid var(--grey-200, #e3e7ed);

  gap: 48px;

  pre {
    &:nth-child(2) {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
