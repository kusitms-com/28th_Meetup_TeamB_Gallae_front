import Axios from '..';

const filterToType: {
  [key: string]: string;
} = {
  '적립 내역': '적립',
  '사용 내역': '사용',
};

export const fetchPointList =
  (filter: string, period: string, page: number, size: number) => () =>
    Axios.get('/point/list', {
      params: {
        type: filter === '전체' ? null : filterToType[filter],
        period: period === '전체' ? null : period,
        page: page - 1,
        size,
      },
    });
