import { useQuery } from 'react-query';
import Axios from '.';

export const ManagerAPI = {
  getFindTempProgram: async () => {
    const response = await Axios.get('/manager/findTemp');
    return response.data.result;
  },

  getProgressPrograms: async ({
    filter,
    page,
  }: {
    filter: string | null;
    page: number;
  }) => {
    const SIZE = 5;
    const response = await Axios.get('/manager/progressPrograms', {
      params: {
        programType: filter === '전체' ? null : filter,
        page: page,
        size: SIZE,
      },
    });
    return response.data;
  },

  getFinishPrograms: async ({
    filter,
    page,
  }: {
    filter: string | null;
    page: number;
  }) => {
    const SIZE = 5;
    const response = await Axios.get('/manager/finishPrograms', {
      params: {
        programType: filter === '전체' ? null : filter,
        page: page,
        size: SIZE,
      },
    });
    return response.data;
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

  deleteTempProgram: async (id: number) => {
    const response = await Axios.delete(`/manager/deleteTemp?programId=${id}`);
    return response;
  },

  deleteProgram: async (id: number) => {
    const response = await Axios.delete(
      `/manager/deleteProgram?programId=${id}`,
    );
    return response.data;
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

export const useGetProgressPrograms = ({
  filter,
  page,
}: {
  filter: string | null;
  page: number;
}) => {
  return useQuery(
    ['getProgressPrograms', filter, page],
    () => ManagerAPI.getProgressPrograms({ filter, page }),
    {
      cacheTime: 500000,
      staleTime: 500005,
      onSuccess: () => {},
      onError: () => {},
    },
  );
};

export const useGetFinishPrograms = ({
  filter,
  page,
}: {
  filter: string | null;
  page: number;
}) => {
  return useQuery(
    ['getFinishPrograms', filter, page],
    () => ManagerAPI.getFinishPrograms({ filter, page }),
    {
      cacheTime: 500000,
      staleTime: 500005,
      onSuccess: () => {},
      onError: () => {},
    },
  );
};
