import * as actions from '../app.action';
import constants from '../app.constants';

const {
    CHANGE_SELECTED_MOVIE,
} = constants;

describe('app actions', () => {
    let actionObject;
    beforeEach(() => {
        actionObject = {
            type: null,
            payload: [{test: true}]
        };
    });

    it('changeSelectedMovie should create action', () => {
        const actionPayload = {
            selectedMovie: [],
        };
        const expectedAction = {
            type: CHANGE_SELECTED_MOVIE,
            payload: {
                ...actionPayload
            }
        };

        expect(actions.changeSelectedMovie(actionPayload)).toEqual(expectedAction);
    });
});
