import { combineReducers } from 'redux';
import movies from './moviesReducer';
import movieDetail from './movieDetailReducer';

export default combineReducers({
  movies,
  movieDetail
});
