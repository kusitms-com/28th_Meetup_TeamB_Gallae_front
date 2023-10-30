import axios from 'axios';

const Axios = axios.create();
Axios.defaults.baseURL = 'http://52.78.13.36'; // 서버 URL
Axios.defaults.withCredentials = true;

export default Axios;
