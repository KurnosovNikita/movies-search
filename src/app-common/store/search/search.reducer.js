import constants from './search.constants';
import {SORT_TYPE} from "../../../utils";

const {
    CHANGE_FILTER,
    CHANGE_INPUT,
    CHANGE_SORT,
    REQUEST_MOVIES,
    RECEIVE_MOVIES,
} = constants;


const initialState = {
    movies: [],
    searchFieldValue: '',
    activeFilter: 'title',
    activeSortByLink: 'rating',
    loading: false,
};

const search = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case REQUEST_MOVIES:
            return {
                ...state,
                loading: true,
            };
        case RECEIVE_MOVIES:
            return {
                ...state,
                loading: false,
                movies: payload,
            };
        case CHANGE_SORT:
            return {
                ...state,
                activeSortByLink: payload.event.target.id,
                movies: payload.movies.sort(compareSortTypes),
            };
        case CHANGE_INPUT:
            return {
                ...state,
                searchFieldValue: payload.target.value,
            };
        case CHANGE_FILTER:
            return {
                ...state,
                activeFilter: payload.target.id,
            };
        default:
            return state;
    }
};

const compareSortTypes = (movieA, movieB) => {
    if (movieA[SORT_TYPE[event.target.id]] > movieB[SORT_TYPE[event.target.id]])
        return -1;
    if (movieA[SORT_TYPE[event.target.id]] < movieA[SORT_TYPE[event.target.id]])
        return 1;
    return 0;
};

export default search;
