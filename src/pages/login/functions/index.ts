import Axios from '@/apis';
import { AxiosResponse } from 'axios';

export const onLoginSuccess = (res: AxiosResponse) => {
  const { accessToken, refreshToken } = res?.data?.result;
  refreshToken;
  Axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};

// export const onSilentRefresh =  async () => {
//   try {
//     const res = await Axios.post(TOKEN)
//   }
// }
