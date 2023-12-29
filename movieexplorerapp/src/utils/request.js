import axios from "axios";
import {setLoading, setMovies, setError} from '../redux/slices/movies/moviesSlice'

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKEY = import.meta.env.VITE_API_KEY;

export const getMovies = (search = 'Pokemon', type, year, currentPage) => async (dispatch) => {
  dispatch(setLoading())
  try {
    if (type) {
      const response = await axios.get(
        `${baseUrl}?s=${search}&Type=${type}&page=${currentPage}&y=${year}&apikey=${apiKEY}`
      );
      dispatch(setMovies(response.data))
    }
    else {
      const response = await axios.get(
        `${baseUrl}?s=${search}&page=${currentPage}&y=${year}&apikey=${apiKEY}`
      );
      dispatch(setMovies(response.data))
    }
  } catch (error) {
    dispatch(setError(error.message))
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
