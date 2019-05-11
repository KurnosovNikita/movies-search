import constants from './movie-detail.constants';

const {
    REQUEST_MOVIES_BY_GENRE,
    RECEIVE_MOVIES_BY_GENRE,
} = constants;

const initialState = {
    moviesByGenre: [],
    loading: false,
};

const movieDetail = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case REQUEST_MOVIES_BY_GENRE:
            return {
                ...state,
                loading: true,
            };
        case RECEIVE_MOVIES_BY_GENRE:
            return {
                ...state,
                loading: false,
                moviesByGenre: payload,
            };
        default:
            return state;
    }
};

export default movieDetail;
