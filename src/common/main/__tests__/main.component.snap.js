import React from 'react';
import {shallow} from 'enzyme';
import Main from '../main.component';

describe('Main component', () => {
    let props;
    beforeEach(() => {
        props = {
            movies: [],
            activeSortByLink: jest.fn(),
            handleSortLinkClick: jest.fn(),
            handleImageClick: jest.fn(),
        };
    });

    it('should render <Main> correctly', () => {
        const component = shallow((<Main {...props} />));

        expect(component).toMatchSnapshot();
    });
});
