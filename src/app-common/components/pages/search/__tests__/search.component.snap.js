import React from 'react';
import {shallow} from 'enzyme';
import Search from '../search.component';
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

describe('Search component', () => {
    let state;

    beforeEach(() => {
        state = {
            movies: [],
            searchFieldValue: '',
            activeFilter: 'title',
            activeSortByLink: 'rating',
        };
    });

    it('should render <Search> correctly', () => {
        const component = shallow(
          <Provider store={store}>
            <Search/>
          </Provider>);

        expect(component).toMatchSnapshot();
    });
});
