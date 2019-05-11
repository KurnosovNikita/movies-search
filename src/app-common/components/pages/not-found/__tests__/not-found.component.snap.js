import React from 'react';
import {shallow} from 'enzyme';
import NotFound from '../not-found.component';
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

describe('Search component', () => {

    it('should render <NotFound> correctly', () => {
        const component = shallow(
          <Provider store={store}>
            <NotFound/>
          </Provider>);

        expect(component).toMatchSnapshot();
    });
});
