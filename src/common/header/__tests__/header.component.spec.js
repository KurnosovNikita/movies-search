import * as React from 'react';
import {shallow, mount} from 'enzyme';
import Header from '../header.component';

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

    it('search button click should call handleSearchClick', () => {
        const component = mount(<Header {...props}/>);
        component
          .find('button.search-btn')
          .simulate('click');

        expect(props.handleSearchClick).toHaveBeenCalled();
    });

    // it('search button keydown should call handleFieldKeyDown', () => {
    //
    //     const component = mount(<Header {...props}/>);
    //     component
    //       .find('button.search-btn')
    //       .simulate('keydown', {keyCode: 13});
    //
    //     expect(props.handleFieldKeyDown).toHaveBeenCalled();
    // });

    it('filter button click should call handleFilterChange', () => {
        const component = mount(<Header {...props}/>);
        component
          .find('button.filter-btn')
          .first()
          .simulate('click');

        expect(props.handleFilterChange).toHaveBeenCalled();
    });

    it('search input enter should call handleFieldInput', () => {
        const component = mount(<Header {...props}/>);
        const inoutField = component
          .find('input.search-field');

        inoutField
          .simulate('input');

        expect(props.handleFieldInput).toHaveBeenCalled();
    });
});
