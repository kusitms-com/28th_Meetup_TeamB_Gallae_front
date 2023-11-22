import React from 'react';
import Axios from '..';

export const postLike = async (
  type: string,
  id: number,
  setIsLike: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  try {
    const res = await Axios.post(`/favorite/${type}`, null, {
      params: {
        [`${type}Id`]: id,
      },
    });
    if (res?.data?.code === 200) setIsLike(prev => !prev);
    return;
  } catch (e) {
    console.error(e);
  }
};
