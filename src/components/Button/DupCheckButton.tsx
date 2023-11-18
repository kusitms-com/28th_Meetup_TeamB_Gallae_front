import { CheckDuplicate } from '@/pages/signup/functions';
import { B3Bold } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

const DupCheckButton: React.FC<{ keyName: string; value: string }> = ({
  keyName,
  value,
}) => {
  const handleDuplicate = (keyName: string, value: string): void => {
    // Todo: 중복이면 중복이라고 알리기
    if (CheckDuplicate(keyName, value)) {
      switch (keyName) {
        case 'id':
          window.alert('중복된 아이디입니다');
          break;
        case 'nickname':
          window.alert('중복된 닉네임입니다.');
          break;
      }
    }
  };
  return (
    <Container onClick={() => handleDuplicate(keyName, value)}>
      <B3Bold $fontColor="#FF7D2C">중복 검사</B3Bold>
    </Container>
  );
};

export default DupCheckButton;

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  height: 56px;
  padding: 12px 48px;
  flex-shrink: 0;

  border-radius: 40px;
  border: 1px solid var(--Sub-3, #ff7d2c);
  background: var(--main_1, #fff);

  cursor: pointer;
`;
