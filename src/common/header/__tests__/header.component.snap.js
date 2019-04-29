import React from 'react';
import {shallow} from 'enzyme';
import Header from '../header.component';

jest.mock('../../../utils');

describe('Header component', () => {
    let props;
    beforeEach(() => {
        props = {
            activeFilter: jest.fn(),
            handleFieldInput: jest.fn(),
            handleFieldKeyDown: jest.fn(),
            handleFilterChange: jest.fn(),
            handleSearchClick: jest.fn(),
        };
    });

    it('should render <Header> correctly', () => {
        const component = shallow(<Header {...props}/>);

        expect(component).toMatchSnapshot();
    });
});
