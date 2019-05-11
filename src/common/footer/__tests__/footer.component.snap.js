import React from 'react';
import {shallow} from 'enzyme';
import Footer from '../footer.component';

describe('Footer component', () => {
    let props;
    beforeEach(() => {
        props = {
            footerClassName: 'test',
            contextClassName: 'test',
        };
    });

    it('should render <Footer> correctly', () => {
        const component = shallow((<Footer {...props} />));

        expect(component).toMatchSnapshot();
    });
});
