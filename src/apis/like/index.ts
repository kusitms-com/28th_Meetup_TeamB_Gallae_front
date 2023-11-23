import React from 'react';
import Axios from '..';

export const postLike = async (
  type: string,
  id: number,
  setIsLike: React.Dispatch<React.SetStateAction<boolean>>,
  handleLikeCount?: () => void,
) => {
  try {
    const res = await Axios.post(`/favorite/${type}`, null, {
      params: {
        [`${type}Id`]: id,
      },
    });
    if (res?.data?.code === 200) {
      setIsLike(prev => !prev);
      handleLikeCount && handleLikeCount();
    }
    return;
  } catch (e) {
    console.error(e);
  }
};
