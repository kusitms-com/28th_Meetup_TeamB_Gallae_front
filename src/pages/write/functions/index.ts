import ReactQuill from 'react-quill';

export const imageHandler = async (quillRef: React.RefObject<ReactQuill>) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.click();

  input.addEventListener('change', async () => {
    const file = input.files?.[0];

    try {
      const editor = quillRef?.current?.getEditor();
      const range = editor?.getSelection();
      // 가져온 위치에 이미지를 삽입한다
      editor?.insertEmbed(range?.index as number, 'image', file);
    } catch (error) {
      console.error(error);
    }
  });
};

export const isOkToPost = (
  selected: string,
  title: string,
  content: string,
  tags: string[] | undefined,
): boolean => {
  return selected && title && content && tags ? true : false;
};
