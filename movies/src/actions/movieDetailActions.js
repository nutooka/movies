import axios from 'axios';

import { API_KEY } from '../Constants';

export const MOVIE_DETAIL_LOAD_PENDING = 'MOVIE_DETAIL_LOAD_PENDING';
export const MOVIE_DETAIL_LOAD_SUCCESS = 'MOVIE_DETAIL_LOAD_SUCCESS';
export const MOVIE_DETAIL_LOAD_FAIL = 'MOVIE_DETAIL_LOAD_FAIL';

export const movieDetailLoadPending = () => ({
  type: MOVIE_DETAIL_LOAD_PENDING
});
export const movieDetailLoadSuccess = movie => ({
  type: MOVIE_DETAIL_LOAD_SUCCESS,
  payload: movie
})
export const movieDetailLoadFail = error => ({
  type: MOVIE_DETAIL_LOAD_FAIL,
  payload: error
})

export const getMovieDetail = (id) => {
  return (dispatch) => {
    dispatch(movieDetailLoadPending())
    return axios.get(`https://api.themoviedb.org/3/search/movie/${id}?api_key=${API_KEY}`)
      .then(response => dispatch(movieDetailLoadSuccess(response.data)))
      .catch(error => dispatch(movieDetailLoadFail(error.response.data)))
  }
}
