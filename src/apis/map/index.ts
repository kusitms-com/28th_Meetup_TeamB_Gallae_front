import Axios from '..';

export const fetchMapMarker = () => () =>
  Axios.get('/programs/filters', {
    params: {
      orderCriteria: '최신순',
      size: 100,
    },
  });
