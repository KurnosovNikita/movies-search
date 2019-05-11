import movieDetail, {initialState} from '../movie-detail.reducer';
import constants from '../movie-detail.constants';

const {
    REQUEST_MOVIES_BY_GENRE,
    RECEIVE_MOVIES_BY_GENRE,
} = constants;

describe('movie-detail reducer', () => {
    let expectedResult;
    let actionObject;
    beforeEach(() => {
        actionObject = {
            type: null,
            payload: [{test: true}]
        };

        expectedResult = {
            moviesByGenre: [],
            loading: false,
        };
    });

    it('should not affect store', () => {
        expect(movieDetail(undefined, {})).toEqual(expectedResult);
    });

    it(`should handle ${REQUEST_MOVIES_BY_GENRE}`, () => {
        actionObject.type = REQUEST_MOVIES_BY_GENRE;

        delete actionObject.payload;

        expectedResult.loading = true;

        expect(movieDetail(undefined, actionObject)).toEqual(expectedResult);
    });

    it(`should handle ${RECEIVE_MOVIES_BY_GENRE}`, () => {
        const receivedMoviesByGenreActionObject = {
            type: RECEIVE_MOVIES_BY_GENRE,
            payload: [],
        };

        const receivedMoviesByGenreExpectedResult = {
            ...expectedResult,
            loading: false,
            moviesByGenre: receivedMoviesByGenreActionObject.payload,
        };

        expect(movieDetail(undefined, receivedMoviesByGenreActionObject)).toEqual(receivedMoviesByGenreExpectedResult);
    });
});
