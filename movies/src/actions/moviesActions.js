import axios from 'axios';

import { API_KEY } from '../Constants';

export const MOVIES_LOAD_PENDING = 'MOVIES_LOAD_PENDING';
export const MOVIES_LOAD_SUCCESS = 'MOVIES_LOAD_SUCCESS';
export const MOVIES_LOAD_FAIL = 'MOVIES_LOAD_FAIL';

export const moviesLoadPending = () => ({
  type: MOVIES_LOAD_PENDING
});
export const moviesLoadSuccess = movies => ({
  type: MOVIES_LOAD_SUCCESS,
  payload: movies
})
export const moviesLoadFail = error => ({
  type: MOVIES_LOAD_FAIL,
  payload: error
})

export const getMovies = (searchValue) => {
  return (dispatch) => {
    dispatch(moviesLoadPending())
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchValue}`)
      .then(response => dispatch(moviesLoadSuccess(response.data)))
      .catch(error => dispatch(moviesLoadFail(error.response.data)))
  }
}
