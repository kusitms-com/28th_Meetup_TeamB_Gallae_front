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
