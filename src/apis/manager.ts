import { useQuery } from 'react-query';
import Axios from '.';

export const ManagerAPI = {
  getFindTempProgram: async () => {
    const response = await Axios.get('/manager/findTemp');
    return response.data.result;
  },
  deleteTempProgram: async (id: number) => {
    const response = await Axios.delete(`/manager/deleteTemp?programId=${id}`);
    return response;
  },
  postTempSaveProgram: async (formData: FormData) => {
    const response = await Axios.post('/manager/tempSave', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
  postSaveProgram: async (formData: FormData) => {
    const response = await Axios.post('/manager/save', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data.result;
  },
};

export const useFindTempProgram = (id: number | null) => {
  return useQuery(
    ['getProgramTempProgram', id],
    () => ManagerAPI.getFindTempProgram(),
    {
      enabled: id === null,
      cacheTime: 500000,
      staleTime: 500005,
      onSuccess: () => {},
      onError: () => {},
    },
  );
};
