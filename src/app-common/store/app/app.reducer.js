import constants from './app.constants';

const {
    CHANGE_SELECTED_MOVIE,
} = constants;

const initialState = {
    selectedMovie: null,
};

const app = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CHANGE_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovie: payload,
            };
        default:
            return state;
    }
};

export default app;
