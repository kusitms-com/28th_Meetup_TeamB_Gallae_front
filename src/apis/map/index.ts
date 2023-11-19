import Axios from '..';

export const fetchMapMarker = () => () => Axios.get('/programs/map');
