import React from 'react';
import {shallow} from 'enzyme';
import Base from '../base.component';
import SearchPage from '../../../pages/search/search.component';

describe('Base component', () => {
    let props;
    beforeEach(() => {
        props = {
            data: <SearchPage />
        };
    });

    it('should render <Base> correctly', () => {
        const component = shallow(<Base {...props}/>);

        expect(component).toMatchSnapshot();
    });
});
