import Axios from '..';

export const fetchBoardData =
  (boardType: string, filter: string, page: number, size: number) => () => {
    if (boardType === 'review') {
      return Axios.get('/reviews/category', {
        params: {
          category: filter === '전체' ? null : filter,
          page: page - 1,
          size,
        },
      });
    } else if (boardType === 'archive') {
      return Axios.get('/archives/category', {
        params: {
          category: filter,
          page: page - 1,
          size,
        },
      });
    }
  };
