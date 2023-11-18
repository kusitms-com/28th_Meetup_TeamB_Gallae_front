import React from 'react';
import styled from 'styled-components';
import { B1Bold, B3 } from '../../../style/fonts/StyledFonts';

interface Props {
  imageSrc: string;
  title: string;
  period: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  cardRef: React.RefObject<HTMLDivElement>;
}

const MapCard: React.FC<Props> = ({
  imageSrc,
  title,
  period,
  setIsModalOpen,
  setSelected,
  cardRef,
}) => {
  const handleClose = () => {
    setIsModalOpen(false);
    setSelected(-1);
  };

  return (
    <Container ref={cardRef}>
      <ImageWrapper>
        <img src={imageSrc} alt="thumbNail" />
      </ImageWrapper>
      <BottomContainer>
        <TextContainer>
          <B1Bold $fontColor="#15191D">{title}</B1Bold>
          <B3 $fontColor="#8E9398">{period}</B3>
        </TextContainer>
        <LikeButton>
          <img src="/src/assets/map/heart_inactive.svg" alt="" />
        </LikeButton>
      </BottomContainer>
      <CloseButton onClick={handleClose}>
        <img src="/src/assets/icons/icon-close.svg" alt="close" />
      </CloseButton>
    </Container>
  );
};

export default MapCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 480px;
  height: 360px;
  flex-shrink: 0;

  padding: 20px;

  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 10px 20px 0px rgba(39, 39, 39, 0.1);

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: 240px;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin: 0;
`;

const LikeButton = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;

  fill: var(--main_1, #fff);
  stroke-width: 1px;
  stroke: var(--grey-300, #d2d7dc);
  backdrop-filter: blur(2.5px);
`;
