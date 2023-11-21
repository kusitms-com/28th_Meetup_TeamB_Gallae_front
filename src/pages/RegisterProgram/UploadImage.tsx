import RoundedButton from '@/components/Button/RoundedButton';
import { B3, B4 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';
import IconCamera from '@/assets/icons/icon-camera.svg';
import IconClose from '@/assets/icons/icon-close.svg';

interface UploadImageProps {
  photoFile: string;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  handleChangeUploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCloseClick: () => void;
  handleUploadButtonClick: () => void;
  isPossibleSubmit: boolean;
}

const UploadImage = ({
  photoFile,
  inputRef,
  handleChangeUploadImage,
  handleCloseClick,
  handleUploadButtonClick,
  isPossibleSubmit,
}: UploadImageProps) => {
  return (
    <Container>
      {!photoFile ? (
        <div className="uploadbox-container">
          <UploadBox>
            <img alt="icon-camera" src={IconCamera} />
            <B3 $fontColor="var(--color_gray500)">
              이미지를 여기에 넣어주세요.
            </B3>
          </UploadBox>
          <B4
            $fontColor={
              !isPossibleSubmit && (photoFile === '' || photoFile === null)
                ? 'red'
                : 'transparent'
            }
          >
            이미지를 첨부해주세요.
          </B4>
        </div>
      ) : (
        <UploadImageBox>
          <img alt="uploaded-image" src={photoFile} height="480px" />
          <img
            className="icon-close"
            alt="icon-close"
            src={IconClose}
            onClick={handleCloseClick}
          />
        </UploadImageBox>
      )}
      <input
        className="none-input"
        accept="image/*"
        multiple
        type="file"
        ref={inputRef}
        onChange={handleChangeUploadImage}
      />
      <RoundedButton
        $buttonColor="var(--color_sub3)"
        $buttonWidth="136px"
        $buttonHeight="38px"
        onClick={handleUploadButtonClick}
      >
        <B3 $fontColor="white">이미지 업로드</B3>
      </RoundedButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  padding-top: 120px;
  padding-bottom: 120px;

  .none-input {
    display: none;
  }

  .uploadbox-container {
    display: flex;
    flex-direction: column;
    gap: 8px;

    ${B4} {
      -ms-user-select: none;
      -moz-user-select: -moz-none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }
  }
`;

const UploadBox = styled.div`
  width: 754px;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-color: var(--color_background);
`;

const UploadImageBox = styled.div`
  position: relative;
  border-radius: 20px;

  .icon-close {
    position: absolute;
    top: 15px;
    right: 13px;
    cursor: pointer;
  }
`;

export default UploadImage;
