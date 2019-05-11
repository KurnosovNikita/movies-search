import * as actions from '../search.action';
import constants from '../search.constants';

const {
    CHANGE_FILTER,
    CHANGE_INPUT,
    CHANGE_SORT,
    REQUEST_MOVIES,
    RECEIVE_MOVIES,
} = constants;

describe('search actions', () => {
    let actionObject;
    beforeEach(() => {
        actionObject = {
            type: null,
            payload: [{test: true}]
        };
    });

    it('requestMovies should create action', () => {
        actionObject.type = REQUEST_MOVIES;
        delete actionObject.payload;

        expect(actions.requestMovies()).toEqual(actionObject);
    });

    it('receivedMovies should create action', () => {
        const actionPayload = {
            movies: [],
        };
        const expectedAction = {
            type: RECEIVE_MOVIES,
            payload: {
                ...actionPayload
            }
        };

        expect(actions.receivedMovies(actionPayload)).toEqual(expectedAction);
    });

    it('changeSort should create action', () => {
        const actionPayload = {
            data: {
                event: {},
                movies: [],
            },
        };
        const expectedAction = {
            type: CHANGE_SORT,
            payload: {
                ...actionPayload
            }
        };

        expect(actions.changeSort(actionPayload)).toEqual(expectedAction);
    });

    it('changeFilter should create action', () => {
        const actionPayload = {
            event: {},
        };
        const expectedAction = {
            type: CHANGE_FILTER,
            payload: {
                ...actionPayload
            }
        };

        expect(actions.changeFilter(actionPayload)).toEqual(expectedAction);
    });

    it('changeInput should create action', () => {
        const actionPayload = {
            event: {},
        };
        const expectedAction = {
            type: CHANGE_INPUT,
            payload: {
                ...actionPayload
            }
        };

        expect(actions.changeInput(actionPayload)).toEqual(expectedAction);
    });
});
