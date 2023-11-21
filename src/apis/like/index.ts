import Axios from '..';

export const postLike = async (type: string, id: number) => {
  try {
    await Axios.post(`/favorite/${type}`, null, {
      params: {
        [`${type}Id`]: id,
      },
    });
  } catch (e) {
    console.error(e);
  }
};
