import { B2 } from '@/style/fonts/StyledFonts';
import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  imageSrc: string;
  description: string;
}

const Introduction: React.FC<Props> = ({ title, imageSrc, description }) => {
  return (
    <Container>
      <ImageWrapper>
        <img src={imageSrc} alt="" />
      </ImageWrapper>
      <TextContainer>
        <Title>{title}</Title>
        <B2 $fontColor="var(--gray-600, #666B6F)">{description}</B2>
      </TextContainer>
    </Container>
  );
};

export default Introduction;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 163px;

  gap: 55px;
`;

const Title = styled.pre`
  color: var(--gray-900, #15191d);
  font-family: 'Recipekorea';
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 54px */
`;

const ImageWrapper = styled.div`
  //캐릭터 들어갈 곳
  width: 180px;
  height: 180px;
  flex-shrink: 0;

  /* img {
    width: 100%;
    height: 100%;
  } */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;
`;
