import { useQuery } from 'react-query';
import Axios from '.';

interface FilterType {
  [key: string]: string | null;
  region: string | null;
  programType: string | null;
  programStatus: string | null;
}

export const FavoriteAPI = {
  getMyFavorite: async (filterData: FilterType | null) => {
    const response = await Axios.get('favorite/mypage', { params: filterData });
    return response.data.result;
  },
};

export const useGetMyFavorite = (filterData: FilterType | null) => {
  return useQuery(
    ['getMyFavorite', filterData],
    () => FavoriteAPI.getMyFavorite(filterData),
    {
      enabled: false,
      onSuccess: data => {
        console.log(data);
      },
      onError: () => {},
    },
  );
};
