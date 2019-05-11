import React from 'react';
import {shallow} from 'enzyme';
import Image from '../image.component';

describe('Image component', () => {
    let props;
    beforeEach(() => {
        props = {
            onClick: jest.fn(),
            className: 'className',
            src: 'src',
            imageAlt: 'imageAlt',
        };
    });

    it('should render <Image> correctly', () => {
        const component = shallow(<Image {...props}/>);

        expect(component).toMatchSnapshot();
    });

    describe('render props correctly', () => {

        it('render with className', () => {
            const component = shallow(<Image {...props}/>);

            expect(component.props().className).toEqual('className');
        });

        it('render with src', () => {
            const component = shallow(<Image {...props}/>);

            expect(component.props().src).toEqual('src');
        });
    });
});
