import { useRef } from 'react';
import { B2Bold, B3, B3Bold } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

interface Props {
  title: string;
  profile: File | null;
  setProfile: React.Dispatch<React.SetStateAction<File | null>>;
  isEssential: boolean;
  placeholder: string;
}

const InputFile: React.FC<Props> = ({
  title,
  profile, // 프로필 사진 파일을 저장하는 state
  setProfile,
  isEssential,
  placeholder,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = e;
    if (!files || !files[0]) return;
    setProfile(files[0]);
  };

  const handleClick = () => {
    if (inputRef?.current) inputRef.current?.click();
  };

  return (
    <Container>
      <Title>
        <B2Bold $fontColor="#15191D">{title}</B2Bold>
        {!isEssential && <B2Bold $fontColor="#AEB3B8">(선택)</B2Bold>}
      </Title>
      <FlexBox>
        <StyledInput
          ref={inputRef}
          type="file"
          placeholder={placeholder}
          onChange={handleChange}
          accept="image/*"
        />
        <HiddenInput>
          <B3 $fontColor="#AEB3B8">
            {profile ? profile?.name : '프로필 사진을 업로드해 주세요.'}
          </B3>
        </HiddenInput>
        {/* Todo: 추후에 삭제 버튼 추가 */}
        <SelectFileButton onClick={handleClick}>
          <B3Bold $fontColor="#fff">파일 찾기</B3Bold>
        </SelectFileButton>
      </FlexBox>
    </Container>
  );
};

export default InputFile;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  gap: 11px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 135px;
  flex-shrink: 0;
  gap: 5px;
`;

const HiddenInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 56px;
  flex-shrink: 1;
  border-radius: 40px;
  border: 1px solid var(--grey-200, #e3e7ed);

  pre {
    margin-left: 40.5px;
  }
`;

const StyledInput = styled.input`
  display: none;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  gap: 20px;
`;

const SelectFileButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  padding: 12px 48px;
  flex-shrink: 0;

  border-radius: 40px;
  background: var(--Sub-3, #ff7d2c);

  cursor: pointer;
`;
