import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKEY = import.meta.env.VITE_API_KEY;
export const getMovies = async (search = 'Pokemon') => {
  try {
    const response = await axios.get(`${baseUrl}?s=${search}&apikey=cc3be543`);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSingleMovie = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}?i=${id}&apikey=${apiKEY}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
