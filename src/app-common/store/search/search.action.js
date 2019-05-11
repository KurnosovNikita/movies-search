import constants from './search.constants';
import {getMovies} from '../../../utils';

const {
    CHANGE_FILTER,
    CHANGE_INPUT,
    CHANGE_SORT,
    REQUEST_MOVIES,
    RECEIVE_MOVIES,
} = constants;

export const requestMovies = () => ({
    type: REQUEST_MOVIES,
});

export const receivedMovies = movies => ({
    type: RECEIVE_MOVIES,
    payload: movies,
});

export const changeSort = data => (
  {
      type: CHANGE_SORT,
      payload: data
  });

export const changeFilter = event => (
  {
      type: CHANGE_FILTER,
      payload: event
  });

export const changeInput = event => (
  {
      type: CHANGE_INPUT,
      payload: event
  });

export const fetchMovies = (data) => {
    return function (dispatch) {
        dispatch(requestMovies());
        return getMovies(data)
          .then((resp) => resp.json())
          .then((resp) => {
              dispatch(receivedMovies(resp.data));
          });
    };
};