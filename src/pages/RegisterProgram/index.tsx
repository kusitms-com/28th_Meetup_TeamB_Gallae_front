import { useState, useRef, useEffect } from 'react';
import DetailInfo from './DetailInfo';
import RequiredInfo from './RequiredInfo';
import UploadImage from './UploadImage';
import { CommonInner } from '@/style/common';
import ButtonList from './ButtonList';
import styled from 'styled-components';
import { ALERT_MESSAGE, DEFAULT_REQUIRED_CONTENT } from '@/constants/Register';
import { useNavigate } from 'react-router-dom';
import { ManagerAPI, useFindTempProgram } from '@/apis/manager';

const RegisterProgram = () => {
  const [photoFile, setPhotoFile] = useState('');
  const [photoName, setPhotoName] = useState<File | null>(null);
  const [programId, setProgramId] = useState<number | null>(null);
  const [programContent, setProgramContent] = useState(
    JSON.parse(JSON.stringify(DEFAULT_REQUIRED_CONTENT)),
  );
  const [isPossibleSubmit, setIsPossibleSubmit] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const formData = new FormData();
  const { data: tempData } = useFindTempProgram(programId);

  useEffect(() => {
    if (tempData) {
      if (tempData.programId === null) setProgramId(-1);
      else setProgramId(tempData.programId);

      let isTemp = false;
      let insertData = JSON.parse(JSON.stringify(DEFAULT_REQUIRED_CONTENT));

      Object.keys(tempData).map(data => {
        if (tempData[data] !== null) {
          isTemp = true;
          if (insertData[data] !== undefined) insertData[data] = tempData[data];
        }
      });

      if (isTemp) {
        if (window.confirm(ALERT_MESSAGE.getDraft)) {
          setPhotoFile(tempData.photoUrl);

          const ext = tempData.photoUrl.split('.').pop();
          const filename = tempData.photoUrl.split('/').pop();
          const metadata = { type: `image/${ext}` };
          const newPhotoName = new File([filename], filename!, metadata);
          setPhotoName(newPhotoName);
          setProgramContent(insertData);
        } else {
          ManagerAPI.deleteTempProgram(tempData.programId);
        }
      }
    }
  }, [tempData]);

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

    const tagString = programContent['hashtag']
      .replace(/#/g, '')
      .replace(/ /g, '');

    if (result) {
      if (window.confirm(ALERT_MESSAGE.register)) {
        photoName && formData.append('photo', photoName);

        Object.keys(programContent).map(key => {
          if (programContent[key] !== '' && key === 'hashtag') {
            return formData.append(key, tagString);
          }
          if (programContent[key] !== '' && key !== 'hashtag')
            return formData.append(key, programContent[key]);
        });

        ManagerAPI.postSaveProgram(formData).then(data =>
          navigate(`/detailProgram/${programContent['programName']}/${data}`),
        );
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDraft = () => {
    if (window.confirm(ALERT_MESSAGE.draft)) {
      photoName && formData.append('photo', photoName);

      Object.keys(programContent).map(key => {
        if (programContent[key] !== '')
          return formData.append(key, programContent[key]);
      });

      Object.keys(programContent).map(key => console.log(formData.get(key)));

      ManagerAPI.postTempSaveProgram(formData);
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

export default RegisterProgram;

const Container = styled.div`
  padding-top: 15px;
  padding-bottom: 268px;
`;
