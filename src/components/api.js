import axios from 'axios';

export const apiQuery = async (query, page) => {
  const resp = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=1&key=38146382-d0cd2611e4be2665aae5df53b&image_type=photo&orientation=horizontal&per_page=6&page=${page}`
  );
  console.log(resp.data);
  return resp.data;
};
