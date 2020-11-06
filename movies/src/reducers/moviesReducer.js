import produce from 'immer';
import {
  MOVIES_LOAD_PENDING,
  MOVIES_LOAD_SUCCESS,
  MOVIES_LOAD_FAIL
} from '../actions/moviesActions';


const initialState = {
  movies: [],
  error: null,
  loading: false
};

const moviesReducer = (state = initialState, action) => {

  switch (action.type) {
    case MOVIES_LOAD_PENDING: {
      return produce(state, (draft) => {
        draft.movies = [];
        draft.error = null;
        draft.loading = true;
      });
    }

    case MOVIES_LOAD_SUCCESS: {
      const movies = action.payload;

      return produce(state, (draft) => {
        draft.movies = movies;
        draft.error = null;
        draft.loading = false;
      });
    }

    case MOVIES_LOAD_FAIL: {
      return produce(state, (draft) => {
        draft.movies = [];
        draft.error = action.payload.status_message;
        draft.loading = false;
      });
    }

    default: {
      return state
    }
  }
};

export default moviesReducer;
