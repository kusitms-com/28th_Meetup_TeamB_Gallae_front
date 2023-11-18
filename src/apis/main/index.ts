import Axios from '..';

export const fetchRecentProgram = () => () => Axios.get('programs/recent');
export const fetchHotProgram = () => () => Axios.get('/programs/best');
