import React from 'react';
import {shallow} from 'enzyme';
import Input from '../input.component';

describe('Input component', () => {
    let props;
    beforeEach(() => {
        props = {
            onInput: jest.fn(),
            onKeyDown: jest.fn(),
            className: 'className',
            containerClassName: 'containerClassName',
            text: 'text',
            id: 'id',
            placeholder: 'placeholder',
        };
    });

    it('should render <Input> correctly', () => {
        const component = shallow(<Input {...props}/>);

        expect(component).toMatchSnapshot();
    });
});
