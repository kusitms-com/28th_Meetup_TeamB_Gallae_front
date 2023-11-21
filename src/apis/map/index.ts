import Axios from '..';

export const fetchMapMarker = () => () =>
  Axios.get('/programs/filters', {
    params: {
      orderCriteria: '인기순',
      size: 100,
    },
  });
