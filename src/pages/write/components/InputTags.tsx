import { B1 } from '@/style/fonts/StyledFonts';
import React from 'react';
import styled from 'styled-components';

interface Props {
  tags: string[] | undefined;
  inputTag: string;
  setInputTag: React.Dispatch<React.SetStateAction<string>>;
  setTags: React.Dispatch<React.SetStateAction<string[] | undefined>>;
}

const InputTags: React.FC<Props> = ({
  tags,
  inputTag,
  setInputTag,
  setTags,
}) => {
  const handleInputTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTag(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      e.preventDefault(); // Spacebar의 기본 동작을 막기 위해 사용
      setTags(prev => [...(prev || []), `#${inputTag}`]);
      setInputTag('');
    } else if (e.key === 'Backspace' && !inputTag) {
      e.preventDefault();
      setTags(prev => {
        const arr = [...(prev || [])];
        arr.pop();
        return arr;
      });
    }
  };
  return (
    <Container>
      {tags &&
        tags.map(tag => (
          <Tag>
            <B1 $fontColor="black">{tag}</B1>
          </Tag>
        ))}
      <InputTag
        value={inputTag}
        onChange={handleInputTags}
        onKeyDown={handleKeyDown}
        placeholder="태그를 입력해주세요. (태그는 공백을 기준으로 입력됩니다)"
      />
    </Container>
  );
};

export default InputTags;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 10px;
  position: relative;
`;
const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 20px;
  background: #e3e7ed;
  padding: 5px 13px;
`;

const InputTag = styled.input`
  width: 100%;
  height: 64px;

  border: none;
  color: var(--grey-700, #53575c);
  /* Body 01 */
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */

  &::placeholder {
    color: var(--grey-400, #aeb3b8);
  }
`;
