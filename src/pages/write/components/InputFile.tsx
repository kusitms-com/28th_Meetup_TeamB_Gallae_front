import { useRef, useCallback } from 'react';
import styled from 'styled-components';

import { B1 } from '@/style/fonts/StyledFonts';
import { AiOutlineClose } from 'react-icons/ai';

interface Props {
  title: string;
  placeholder: string;
  inputFile: File | undefined;
  setInputFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

const InputFile: React.FC<Props> = ({
  title,
  placeholder,
  inputFile,
  setInputFile,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {
    if (inputRef?.current) inputRef.current?.click();
  }, [inputRef]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) setInputFile(files[0]);
  }, []);

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setInputFile(undefined);
  };

  return (
    <Container onClick={handleClick}>
      <InnerContainer>
        <FlexBox>
          <B1 $fontColor="#53575C">{title}</B1>
          <B1 $fontColor="#AEB3B8">
            {inputFile ? inputFile.name : placeholder}
          </B1>
        </FlexBox>
        <AiOutlineClose
          style={{ fontSize: '30px', zIndex: '2', padding: '5px' }}
          onClick={handleDelete}
        />
      </InnerContainer>
      <FileInput ref={inputRef} onChange={handleChange} type="file" />
    </Container>
  );
};

export default InputFile;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  padding: 17px 40px;
  border-radius: 20px;
  border: 1px solid var(--grey-200, #e3e7ed);

  cursor: pointer;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 48px;
`;

const FileInput = styled.input`
  display: none;
`;
