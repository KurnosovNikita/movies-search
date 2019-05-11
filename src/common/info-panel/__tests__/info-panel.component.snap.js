import React from 'react';
import {shallow} from 'enzyme';
import InfoPanel from '../info-panel.component';

describe('InfoPanel component', () => {
    let props;
    beforeEach(() => {
        props = {
            moviesQuantity: jest.fn(),
            handleSortLinkClick: jest.fn(),
            activeSortByLink: jest.fn(),
        };
    });

    it('should render <InfoPanel> correctly', () => {
        const component = shallow((<InfoPanel {...props} />));

        expect(component).toMatchSnapshot();
    });
});
