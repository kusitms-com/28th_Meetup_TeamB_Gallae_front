import { checkDuplicate } from '@/pages/signup/functions';
import { B3Bold } from '@/style/fonts/StyledFonts';
import { DupCheckType } from '@/types';
import styled from 'styled-components';

const DupCheckButton: React.FC<{
  keyName: string;
  value: string;
  setIsDuplicated: React.Dispatch<React.SetStateAction<DupCheckType>>;
}> = ({ keyName, value, setIsDuplicated }) => {
  const handleDuplicate = async (keyName: string, value: string) => {
    // Todo: 중복이면 중복이라고 알리기
    if (await checkDuplicate(keyName, value)) {
      switch (keyName) {
        case 'loginId':
          window.alert('중복된 아이디입니다');
          setIsDuplicated(prev => ({ ...prev, loginId: true }));
          break;
        case 'nickName':
          window.alert('중복된 닉네임입니다.');
          setIsDuplicated(prev => ({ ...prev, nickName: true }));
          break;
      }
    } else {
      switch (keyName) {
        case 'loginId':
          window.alert('사용가능한 아이디입니다.');
          setIsDuplicated(prev => ({ ...prev, loginId: false }));
          break;
        case 'nickName':
          window.alert('사용가능한 닉네임입니다.');
          setIsDuplicated(prev => ({ ...prev, nickName: false }));
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
