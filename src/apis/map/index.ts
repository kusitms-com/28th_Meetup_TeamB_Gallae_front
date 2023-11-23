import Axios from '..';

export const fetchMapMarker = (searchFilter: string) => () =>
  Axios.get('/programs/filters', {
    params: {
      orderCriteria: '최신순',
      location: searchFilter,
      size: 100,
    },
  });
