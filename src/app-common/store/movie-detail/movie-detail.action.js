import constants from './movie-detail.constants';
import {getMovies} from '../../../utils';

const {
    REQUEST_MOVIES_BY_GENRE,
    RECEIVE_MOVIES_BY_GENRE,
} = constants;

export const requestMoviesByGenre = () => ({
    type: REQUEST_MOVIES_BY_GENRE,
});

export const receivedMoviesByGenre = movies => ({
    type: RECEIVE_MOVIES_BY_GENRE,
    payload: movies,
});

export const fetchMoviesByGenre = (data) => {
    return function (dispatch) {
        dispatch(requestMoviesByGenre());
        return getMovies(data)
          .then((resp) => resp.json())
          .then((resp) => {
              dispatch(receivedMoviesByGenre(resp.data));
          });
    };
};