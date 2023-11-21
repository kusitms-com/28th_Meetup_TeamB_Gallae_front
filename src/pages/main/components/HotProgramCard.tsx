import styled from 'styled-components';

import { B1Bold, B3, B3Bold, H3 } from '@/style/fonts/StyledFonts';
import { ProgramMainInfoType } from '@/types';
import HeartIcon from '@/assets/icons/icon-heart.svg';
import { useNavigate } from 'react-router-dom';

const HotProgramCard: React.FC<ProgramMainInfoType> = ({
  id,
  photoUrl,
  remainDay,
  programName,
  hashTag,
  like,
}) => {
  const naviate = useNavigate();
  const handleClick = () => {
    naviate(`/detailProgram/${programName}/${id}`);
  };

  return (
    <Container imagesrc={photoUrl} onClick={handleClick}>
      <TextContainer>
        <B1Bold $fontColor="#FF7D2C">{remainDay}</B1Bold>
        <H3 $fontColor="#fff">{programName}</H3>
        <FlexContainer gap={8}>
          {hashTag.map(tag => (
            <B3 key={tag} $fontColor="#fff">{`#${tag}`}</B3>
          ))}
        </FlexContainer>
        <FlexContainer gap={4}>
          <img src={HeartIcon} alt="heart" />
          <B3Bold $fontColor="#fff">{like}</B3Bold>
        </FlexContainer>
      </TextContainer>
    </Container>
  );
};

export default HotProgramCard;

interface ContainerProps {
  imagesrc: string | null;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  width: 360px;
  height: 483px;
  flex-shrink: 0;

  border-radius: 20px;
  background-image: url(${({ imagesrc }) => imagesrc});

  background-size: cover;

  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);

  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  width: 100%;
  height: 100%;
  padding: 24px 33px;
  gap: 8px;

  background: linear-gradient(
    180deg,
    rgba(61, 61, 61, 0) 41.15%,
    rgba(50, 50, 50, 0.6) 100%
  );

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

interface FlexContainerProps {
  gap: number;
}

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: ${({ gap }) => gap}px;
`;
