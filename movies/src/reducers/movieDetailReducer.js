import produce from 'immer';
import {
  MOVIE_DETAIL_LOAD_PENDING,
  MOVIE_DETAIL_LOAD_FAIL,
  MOVIE_DETAIL_LOAD_SUCCESS
} from '../actions/movieDetailActions';


const initialState = {
  movieDetail: [],
  error: null,
  loading: false
};

const movieDetailReducer = (state = initialState, action) => {

  switch (action.type) {
    case MOVIE_DETAIL_LOAD_PENDING: {
      return produce(state, (draft) => {
        draft.movieDetail = [];
        draft.error = null;
        draft.loading = true;
      });
    }

    case MOVIE_DETAIL_LOAD_SUCCESS: {
      const movieDetail = action.payload;

      return produce(state, (draft) => {
        draft.movieDetail = movieDetail;
        draft.error = null;
        draft.loading = false;
      });
    }

    case MOVIE_DETAIL_LOAD_FAIL: {
      return produce(state, (draft) => {
        draft.movieDetail = [];
        draft.error = action.payload.status_message;
        draft.loading = false;
      });
    }

    default: {
      return state
    }
  }
};

export default movieDetailReducer;
