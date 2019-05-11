import * as actions from '../movie-detail.action';
import constants from '../movie-detail.constants';

const {
    REQUEST_MOVIES_BY_GENRE,
    RECEIVE_MOVIES_BY_GENRE,
} = constants;

describe('movie-detail actions', () => {
    let actionObject;
    beforeEach(() => {
        actionObject = {
            type: null,
            payload: [{test: true}]
        };
    });

    it('requestMoviesByGenre should create action', () => {
        actionObject.type = REQUEST_MOVIES_BY_GENRE;
        delete actionObject.payload;

        expect(actions.requestMoviesByGenre()).toEqual(actionObject);
    });

    it('receivedMoviesByGenre should create action', () => {
        const actionPayload = {
            movies: [],
        };
        const expectedAction = {
            type: RECEIVE_MOVIES_BY_GENRE,
            payload: {
                ...actionPayload
            }
        };

        expect(actions.receivedMoviesByGenre(actionPayload)).toEqual(expectedAction);
    });
});
