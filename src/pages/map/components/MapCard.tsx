import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { B1Bold, B3 } from '../../../style/fonts/StyledFonts';
import LikeButton from '@/components/Button/LikeButton';

import CloseIcon from '@/assets/icons/icon-close.svg';

interface Props {
  id: number;
  photoUrl: string;
  programName: string;
  period: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  cardRef: React.RefObject<HTMLDivElement>;
  isLiked: boolean;
}

const MapCard: React.FC<Props> = ({
  id,
  photoUrl,
  programName,
  period,
  setIsModalOpen,
  setSelected,
  cardRef,
  isLiked,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detailProgram/${programName}/${id}`);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(false);
    setSelected(-1);
  };

  const [isLike, setIsLike] = useState<boolean>(isLiked);

  return (
    <Container ref={cardRef} onClick={handleClick}>
      <ImageWrapper>
        <img src={photoUrl} alt="thumbNail" />
      </ImageWrapper>
      <BottomContainer>
        <TextContainer>
          <B1Bold $fontColor="#15191D">{programName}</B1Bold>
          <B3 $fontColor="#8E9398">{period}</B3>
        </TextContainer>
        <LikeButton
          isLike={isLike}
          setIsLike={setIsLike}
          type="program"
          id={id}
        />
      </BottomContainer>
      <CloseButton onClick={handleClose}>
        <img src={CloseIcon} alt="close" />
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

  cursor: pointer;

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

  z-index: 3;
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
