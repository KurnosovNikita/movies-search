import React from 'react';
import {shallow} from 'enzyme';
import Cards from '../cards.component';

describe('Cards component', () => {
    let props;
    beforeEach(() => {
        props = {
            movies: [],
            handleImageClick: jest.fn(),
        };
    });

    it('should render <Cards> correctly', () => {
        const component = shallow((<Cards {...props} />));

        expect(component).toMatchSnapshot();
    });
});
