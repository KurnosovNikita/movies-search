import React from 'react';
import {shallow} from 'enzyme';
import Button from '../button.component';

describe('Button component', () => {
    let props;
    beforeEach(() => {
        props = {
            onClick: jest.fn(),
            className:'className',
            text: 'text',
            id: 'id',
        };
    });

    it('should render <Button> correctly', () => {
        const component = shallow(<Button {...props}/>);

        expect(component).toMatchSnapshot();
    });

    describe('render props correctly', () => {

        it('render with className', () => {
            const component = shallow(<Button {...props}/>);

            expect(component.props().className).toEqual('className');
        });

        it('render with id', () => {
            const component = shallow(<Button {...props}/>);

            expect(component.props().id).toEqual('id');
        });
    });
});
