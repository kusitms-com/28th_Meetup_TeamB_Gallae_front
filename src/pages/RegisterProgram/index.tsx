import { useState, useRef, useEffect } from 'react';
import DetailInfo from './DetailInfo';
import RequiredInfo from './RequiredInfo';
import UploadImage from './UploadImage';
import { CommonInner } from '@/style/common';
import ButtonList from './ButtonList';
import styled from 'styled-components';
import { ALERT_MESSAGE, DEFAULT_REQUIRED_CONTENT } from '@/constants/Register';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterProgram = () => {
  const [photoFile, setPhotoFile] = useState('');
  const [photoName, setPhotoName] = useState<File | null>(null);
  const [programContent, setProgramContent] = useState(
    DEFAULT_REQUIRED_CONTENT,
  );
  const [isPossibleSubmit, setIsPossibleSubmit] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const formData = new FormData();

  useEffect(() => {
    /**
     * TODO: 페이지 시작하자마자 임시 저장한 글이 있는지 확인
     *
     * 임시저장한 글이 있을 때
     * if (window.confirm('기존에 작성하던 공고를 불러오시겠습니까?')) {
     *   photoFile, photoName, programContent 내용 업데이트
     * } else {
     *   임시저장한 글 삭제하는 API 호출
     * }
     */
    /* if (window.confirm(ALERT_MESSAGE.draft)) {
      // TODO: 임시 저장 API 연결
    } */
  }, []);

  // TODO: 임시 저장 글이 있는지 확인

  const handleChangeUploadImage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!event.target.files) {
      return;
    }
    let reader = new FileReader();

    reader.onload = function (event) {
      if (event.target) {
        const image = event.target.result?.toString()
          ? event.target.result?.toString()
          : '';
        setPhotoFile(image);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
    setPhotoName(event.target.files[0]);
  };

  const handleUploadButtonClick = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  const handleImageCloseClick = () => {
    setPhotoFile('');
    setPhotoName(null);
  };

  const handleCancel = () => {
    if (window.confirm(ALERT_MESSAGE.cancel)) {
      navigate('/');
    }
  };

  const handleRegister = () => {
    let result = true;
    let keyList = Object.keys(programContent);
    keyList.pop();

    keyList.map(key => {
      result = result && programContent[key] !== '';
    });

    result = result && programContent.programName.length <= 50;
    result = result && photoName !== null;
    setIsPossibleSubmit(result);
    console.log(result);

    if (result) {
      if (window.confirm(ALERT_MESSAGE.register)) {
        // TODO: 공고 등록 API 연결 (진행 중)
        photoName && formData.append('photo', photoName);
        formData.append('model', JSON.stringify(programContent));
        axios
          .post('http://52.78.13.36/manager/save', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDraft = () => {
    if (window.confirm(ALERT_MESSAGE.draft)) {
      // TODO: 임시 저장 API 연결
    }
  };

  return (
    <Container>
      <CommonInner>
        <UploadImage
          photoFile={photoFile}
          inputRef={inputRef}
          handleChangeUploadImage={handleChangeUploadImage}
          handleCloseClick={handleImageCloseClick}
          handleUploadButtonClick={handleUploadButtonClick}
          isPossibleSubmit={isPossibleSubmit}
        />
        <RequiredInfo
          programContent={programContent}
          setProgramContent={setProgramContent}
          isPossibleSubmit={isPossibleSubmit}
        />
        <DetailInfo content={programContent} setContent={setProgramContent} />
        <ButtonList
          handleCancel={handleCancel}
          handleRegister={handleRegister}
          handleDraft={handleDraft}
        />
      </CommonInner>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 15px;
  padding-bottom: 268px;
`;

export default RegisterProgram;
