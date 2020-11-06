import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  CircularProgress,
  makeStyles
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { getMovieDetail } from '../../actions/movieDetailActions';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {},
});

const MovieDetail = () => {
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, error, movieDetail } = useSelector((state) => state.movieDetail);

  useEffect(() => {
    dispatch(getMovieDetail(id));
  }, [dispatch]);


  return (
    <div className={classes.root}>
      {movieDetail && movieDetail.title}
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
    </div>
  );
}

export default MovieDetail;
