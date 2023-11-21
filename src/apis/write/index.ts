import { setEditDataFunctionType } from '@/types';
import Axios from '..';

export const postBoardData = async (
  id: string | null,
  isEdit: boolean,
  writeType: string,
  selected: string,
  title: string,
  content: string,
  tags: string[] | undefined,
  inputFile: File | undefined,
  nickName: string,
) => {
  const postData = {
    category: selected,
    writer: nickName,
    file: inputFile || null,
    title,
    body: content,
    hashTags: tags?.join(',') || '',
  };

  if (!isEdit) {
    if (writeType === 'reviews') {
      // 지원 후기
      try {
        const res = await Axios.post('/reviews/saveReview', postData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (res?.status === 200) {
          window.location.href = '/review';
        }
      } catch (e) {
        window.alert('업로드에 실패했습니다. 다시 시도해주세요.');
        console.error(e);
      }
    } else if (writeType === 'archives') {
      // 자료실
      try {
        const res = await Axios.post('/archives/saveArchive', postData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (res?.status === 200) {
          window.location.href = '/archive';
        }
      } catch (e) {
        window.alert('업로드에 실패했습니다. 다시 시도해주세요.');
        console.error(e);
      }
    }
  } else {
    // 수정 시
    const editData = {
      ...postData,
      [`${writeType === 'reviews' ? 'reviewId' : 'archiveId'}`]: parseInt(
        id as string,
        10,
      ),
    };

    if (writeType === 'reviews') {
      // 지원 후기
      try {
        const res = await Axios.post('/reviews/editReview', editData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (res?.status === 200) {
          window.location.href = '/review';
        }
      } catch (e) {
        window.alert('업로드에 실패했습니다. 다시 시도해주세요.');
        console.error(e);
      }
    } else if (writeType === 'archives') {
      // 자료실
      try {
        const res = await Axios.post('/archives/editArchive', editData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (res?.status === 200) {
          window.location.href = '/archive';
        }
      } catch (e) {
        window.alert('업로드에 실패했습니다. 다시 시도해주세요.');
        console.error(e);
      }
    }
  }
};

export const fetchEditData = async (writeType: string, id: number) => {
  const key = writeType === 'reviews' ? 'reviewId' : 'archiveId';
  const res = Axios.get(`/${writeType}/detail`, {
    params: {
      [key]: id,
    },
  });
  return res;
};

export const fetchFiles = async (fileUrl: string, fileName: string) => {
  const file = await fetch(fileUrl)
    .then(res => res.blob())
    .then(blob => {
      return new File([blob], fileName, {
        type: blob.type,
      });
    });
  return file;
};

export const setEditData: setEditDataFunctionType = (
  writeType,
  id,
  setInputFile,
  setSelected,
  setContent,
  setTags,
  setTitle,
) => {
  fetchEditData(writeType, parseInt(id, 10)).then(res => {
    const { body, category, hashtag, title, fileUrl, fileName } =
      res?.data?.result;
    if (fileUrl) {
      fetchFiles(fileUrl, fileName)
        .then(file => {
          setInputFile(file);
        })
        .catch(e => {
          console.error(e);
        });
    }
    setSelected(category);
    setContent(body);
    setTags(hashtag.split(','));
    setTitle(title);
  });
};
