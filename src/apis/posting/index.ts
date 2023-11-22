import Axios from '..';

export const fetchPostingDetail = (postingType: string, id: number) => () =>
  Axios.get(`/${postingType}/detail`, {
    params: {
      [`${postingType === 'reviews' ? 'review' : 'archive'}Id`]: id,
    },
  });

export const fetchMostLikedPosting =
  (postingType: string, page: number, size: number) => () =>
    Axios.get(`${postingType}/sorted/likes`, {
      params: {
        page: page - 1,
        size,
      },
    });

export const deletePosting = async (writeType: string, id: number) => {
  try {
    const res = await Axios.delete(
      `/${writeType}s/del${writeType === 'review' ? 'Review' : 'Archive'}`,
      {
        params: {
          [`${writeType}Id`]: id,
        },
      },
    );
    if (res.data?.code === 200) {
      window.location.href = `/${writeType}`;
    }
  } catch (e) {
    console.error(e);
  }
};
