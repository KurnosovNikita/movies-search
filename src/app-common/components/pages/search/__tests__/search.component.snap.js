import React from 'react';
import {shallow} from 'enzyme';
import Search from '../search.component';

describe('Search component', () => {
    let props,
      state;
    beforeEach(() => {
        state = {
            movies: [],
            searchFieldValue: '',
            activeFilter: 'title',
            activeSortByLink: 'rating',
        };
    });

    it('should render <Search> correctly', () => {
        const component = shallow(<Search/>);

        expect(component).toMatchSnapshot();
    });
});
