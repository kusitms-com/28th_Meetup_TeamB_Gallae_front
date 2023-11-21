import { useQuery } from 'react-query';
import Axios from '.';

interface FilterType {
  [key: string]: string | number | undefined;
  programName?: string;
  orderCriteria?: string;
  location?: string;
  programType?: string;
  detailType?: string;
  recruitStartDate?: string;
  recruitEndDate?: string;
  activeStartDate?: string;
  activeEndDate?: string;
  size?: number;
}

export const ProgramAPI = {
  getProgramDetailInfo: async (programId: number) => {
    const response = await Axios.get(`/programs/program?id=${programId}`);
    return response.data;
  },
  getSearchProgram: async (apiData: FilterType | null) => {
    const response = await Axios.get(`/programs/filters`, { params: apiData });
    return response.data.result.programs;
  },
};

export const useGetProgramDetailInfo = (programId: number) => {
  return useQuery(
    ['getProgramDetailInfo', programId],
    () => ProgramAPI.getProgramDetailInfo(programId),
    {
      cacheTime: 500000,
      staleTime: 500005,
      onSuccess: () => {},
      onError: () => {},
    },
  );
};

export const useGetSearchProgram = (apiData: FilterType | null) => {
  return useQuery(
    ['getSearchProgram', apiData],
    () => ProgramAPI.getSearchProgram(apiData),
    {
      enabled: false,
      cacheTime: 500000,
      staleTime: 500005,
      onSuccess: () => {},
      onError: () => {},
    },
  );
};
