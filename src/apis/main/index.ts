import Axios from '..';

export const fetchRecentProgram = () => () =>
  Axios.get('programs/filters', {
    params: {
      orderCriteria: '최신순',
      size: 4,
    },
  });
export const fetchHotProgram = () => () =>
  Axios.get('/programs/filters', {
    params: {
      orderCriteria: '인기순',
      size: 4,
    },
  });
