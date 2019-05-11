import search, {initialState} from '../search.reducer';
import constants from '../search.constants';

const {
    CHANGE_FILTER,
    CHANGE_INPUT,
    CHANGE_SORT,
    REQUEST_MOVIES,
    RECEIVE_MOVIES,
} = constants;

describe('search reducer', () => {
    let expectedResult;
    let actionObject;
    beforeEach(() => {
        actionObject = {
            type: null,
            payload: [{test: true}]
        };

        expectedResult = {
            movies: [],
            searchFieldValue: '',
            activeFilter: 'title',
            activeSortByLink: 'rating',
            loading: false,
        };
    });

    it('should not affect store', () => {
        expect(search(undefined, {})).toEqual(expectedResult);
    });

    it(`should handle ${REQUEST_MOVIES}`, () => {
        actionObject.type = REQUEST_MOVIES;

        delete actionObject.payload;

        expectedResult.loading = true;

        expect(search(undefined, actionObject)).toEqual(expectedResult);
    });

    it(`should handle ${RECEIVE_MOVIES}`, () => {
        const receivedMoviesActionObject = {
            type: RECEIVE_MOVIES,
            payload: [],
        };

        const receivedMoviesExpectedResult = {
            ...expectedResult,
            loading: false,
            movies: receivedMoviesActionObject.payload,
        };

        expect(search(undefined, receivedMoviesActionObject)).toEqual(receivedMoviesExpectedResult);
    });

    it(`should handle ${CHANGE_SORT}`, () => {
        const changeSortActionObject = {
            type: CHANGE_SORT,
            payload: {
                event: {
                    target: {
                        id: 'test',
                    }
                },
                movies: [],
            },
        };

        const changeSortExpectedResult = {
            ...expectedResult,
            activeSortByLink: changeSortActionObject.payload.event.target.id,
            movies: changeSortActionObject.payload.movies,
        };

        expect(search(undefined, changeSortActionObject)).toEqual(changeSortExpectedResult);
    });

    it(`should handle ${CHANGE_FILTER}`, () => {
        const changeFilterActionObject = {
            type: CHANGE_FILTER,
            payload: {
                target: {
                    id: 'test',
                }
            },
        };

        const changeFilterExpectedResult = {
            ...expectedResult,
            activeFilter: changeFilterActionObject.payload.target.id,
        };

        expect(search(undefined, changeFilterActionObject)).toEqual(changeFilterExpectedResult);
    });

    it(`should handle ${CHANGE_INPUT}`, () => {
        const changeInputActionObject = {
            type: CHANGE_INPUT,
            payload: {
                target: {
                    value: 'test',
                }
            },
        };

        const changeInputExpectedResult = {
            ...expectedResult,
            searchFieldValue: changeInputActionObject.payload.target.value,
        };

        expect(search(undefined, changeInputActionObject)).toEqual(changeInputExpectedResult);
    });
});
