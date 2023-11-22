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

  getSimilarRecommend: async (programId: number) => {
    const response = await Axios.get(
      `/programs/similarRecommend?id=${programId}`,
    );
    return response.data.result;
  },

  getRegionTour: async (programId: number) => {
    const response = await Axios.get(`/programs/regionTour?id=${programId}`);
    return response.data.result;
  },

  getRegionLodgment: async (programId: number) => {
    const response = await Axios.get(
      `/programs/regionLodgment?id=${programId}`,
    );
    return response.data.result;
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
      onSuccess: data => {
        console.log(data);
      },
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

export const useGetSimilarRecommend = ({
  programId,
  writerVersion,
}: {
  programId: number;
  writerVersion: boolean | null;
}) => {
  return useQuery(
    ['getSimilarRecommend', programId],
    () => ProgramAPI.getSimilarRecommend(programId),
    {
      enabled: writerVersion === null ? false : !writerVersion,
      cacheTime: 500000,
      staleTime: 500005,
      onSuccess: data => {
        console.log(data);
      },
      onError: () => {},
    },
  );
};

export const useGetRegionTour = ({
  programId,
  writerVersion,
}: {
  programId: number;
  writerVersion: boolean | null;
}) => {
  return useQuery(
    ['getRegionTour', programId],
    () => ProgramAPI.getRegionTour(programId),
    {
      enabled: writerVersion === null ? false : !writerVersion,
      cacheTime: 500000,
      staleTime: 500005,
      onSuccess: data => {
        console.log(data);
      },
      onError: () => {},
    },
  );
};
export const useGetRegionLodgment = ({
  programId,
  writerVersion,
}: {
  programId: number;
  writerVersion: boolean | null;
}) => {
  return useQuery(
    ['getRegionLodgment', programId],
    () => ProgramAPI.getRegionLodgment(programId),
    {
      enabled: writerVersion === null ? false : !writerVersion,
      staleTime: 500005,
      onSuccess: data => {
        console.log(data);
      },
      onError: () => {},
    },
  );
};
