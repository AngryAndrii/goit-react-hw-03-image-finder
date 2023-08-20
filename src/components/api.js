import axios from 'axios';

export const apiQuery = async (query, page) => {
  const resp = await axios.get(`https://pixabay.com/api/?`, {
    params: {
      orientation: 'horizontal',
      per_page: 12,
      image_type: 'photo',
      key: '38146382-d0cd2611e4be2665aae5df53b',
      q: `${query}`,
      page: `${page}`,
    },
  });

  return resp.data;
};
