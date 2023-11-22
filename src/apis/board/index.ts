import Axios from '..';

export const fetchBoardData =
  (
    boardType: string,
    filter: string,
    searchInput: string,
    page: number,
    size: number,
  ) =>
  () =>
    Axios.get(`/${boardType}/category`, {
      params: {
        category: filter === '전체' ? null : filter,
        title: searchInput,
        page: page - 1,
        size,
      },
    });

export const fetchMyBoardData =
  (filter: string, page: number, size: number) => () =>
    Axios.get(
      `users/myPosts/${filter === '지원 후기' ? 'review' : 'archive'}`,
      {
        params: {
          page: page - 1,
          size,
        },
      },
    );
