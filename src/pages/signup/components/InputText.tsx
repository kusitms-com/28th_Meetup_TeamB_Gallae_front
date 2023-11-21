import { B2Bold, B4 } from '@/style/fonts/StyledFonts';
import { InputType } from '@/types';
import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  keyName: string;
  inputData: InputType;
  setInputData: React.Dispatch<React.SetStateAction<InputType>>;
  isEssential: boolean;
  placeholder: string;
  alertMessage: string;
  isAlert: boolean;
}

const InputText: React.FC<Props> = ({
  title,
  keyName, // inputData 객체 내에 저장될 때의 key 이름
  inputData,
  setInputData,
  isEssential, // 필수입력 여부
  placeholder,
  alertMessage = '',
  isAlert = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(prev => ({ ...prev, [keyName]: e.target.value }));
  };

  return (
    <Container>
      <Title>
        <B2Bold $fontColor="#15191D">{title}</B2Bold>
        {!isEssential && <B2Bold $fontColor="#AEB3B8">(선택)</B2Bold>}
      </Title>
      <FlexBox>
        <StyledInput
          type={
            keyName === 'loginPw' || keyName === 'repassword'
              ? 'password'
              : 'text'
          }
          placeholder={placeholder}
          value={inputData[keyName] || ''}
          onChange={handleChange}
        />
        {isAlert && (
          <B4 className="alert" $fontColor="#F6505A">
            {alertMessage}
          </B4>
        )}
      </FlexBox>
    </Container>
  );
};

export default InputText;

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

const StyledInput = styled.input`
  width: 100%;
  height: 56px;
  flex-shrink: 1;
  border-radius: 40px;
  border: 1px solid var(--grey-200, #e3e7ed);
  text-indent: 40.5px;

  color: var(--grey-400, #15191d);
  /* Body 03 */
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */

  &::placeholder {
    color: var(--grey-400, #aeb3b8);
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  width: 100%;

  .alert {
    position: absolute;
    bottom: -25px;
    left: 40.5px;
  }
`;
