import constants from './app.constants';

const {
    CHANGE_SELECTED_MOVIE,
} = constants;

export const changeSelectedMovie = movie => (
  {
      type: CHANGE_SELECTED_MOVIE,
      payload: movie
  });