import React, { useState } from 'react';
import { Link } from "react-router-dom";

import {
  Button,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  CircularProgress,
  makeStyles
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';

import MovieCard from '../../components/Card';

import { getMovies } from '../../actions/moviesActions';

import locales from '../../locales/en.json';

const useStyles = makeStyles(() => ({
  root: {
    padding: 100,
  },
  cardHolder: {
    display: 'inline-flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%'
  }
}));

const HomeView = () => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const { loading, error, movies } = useSelector((state) => state.movies);


  const renderNotFoundAlert = () => {
    if (value && movies.results && movies.results.length === 0) {
      return <Alert severity="info">No match.</Alert>;
    }
  }

  const renderMovies = (movies) => {
    return (
      <div className={classes.cardHolder}>
        {movies.results.map(result =>
          <Link to={`/movie/${result.id}`} >
            <MovieCard
              key={result.id}
              id={result.id}
              title={result.title}
              img={createImagePath(result.poster_path)}
              overview={result.overview}
            />
          </Link>
        )}
      </div>
    );
  }

  const createImagePath = (path) => {
    if (path) {
      return `https://image.tmdb.org/t/p/w500${path}`;
    }
    return 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg';
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSearch = () => {
    dispatch(getMovies(value));
  }

  return (
    <>
      <div className={classes.root}>
        <FormControl>
          <InputLabel htmlFor="input-movie-search">Search for a movie</InputLabel>
          <Input
            id="input-movie-search"
            value={value}
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
          <Button
            variant="outlined"
            color="primary"
            onClick={handleSearch}
          >
            Search
          </Button>
        </FormControl>
      </div>

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {renderNotFoundAlert()}

      {value && movies.results && renderMovies(movies)}
    </>
  );
}

export default HomeView;
