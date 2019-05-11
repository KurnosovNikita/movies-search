import React from 'react';
import {shallow} from 'enzyme';
import App from '../app.component';
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

describe('App component', () => {
    let state;
    state = {
        selectedMovie: null,
    };
    describe('with globalSearch component', () => {
        it('should render <App> with <SearchPage>', () => {
            const component = shallow(
              <Provider store={store}>
                  <App {...state}/>
              </Provider>);

            expect(component).toMatchSnapshot();
        });
    });

    describe('with movieDetail component', () => {
        state = {
            selectedMovie: null,
        };

        it('should render <App> with <MovieDetailPage>', () => {
            const component = shallow(
              <Provider store={store}>
                  <App {...state}/>
              </Provider>);

            component.update();
            expect(component).toMatchSnapshot();
        });
    });
});
