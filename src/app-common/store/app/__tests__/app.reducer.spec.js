import app, {initialState} from '../app.reducer';
import constants from '../app.constants';

const {
    CHANGE_SELECTED_MOVIE,
} = constants;

describe('app reducer', () => {
    let expectedResult;
    let actionObject;
    beforeEach(() => {
        actionObject = {
            type: null,
            payload: [{test: true}]
        };

        expectedResult = {
            selectedMovie: null,
        };
    });

    it('should not affect store', () => {
        expect(app(undefined, {})).toEqual(expectedResult);
    });

    it(`should handle ${CHANGE_SELECTED_MOVIE}`, () => {
        const changeSelectedMovieActionObject = {
            type: CHANGE_SELECTED_MOVIE,
            payload: [],
        };

        const changeSelectedMovieExpectedResult = {
            ...expectedResult,
            selectedMovie: changeSelectedMovieActionObject.payload,
        };

        expect(app(undefined, changeSelectedMovieActionObject)).toEqual(changeSelectedMovieExpectedResult);
    });
});
