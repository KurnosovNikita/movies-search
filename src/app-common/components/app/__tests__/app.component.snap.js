import React from 'react';
import {shallow} from 'enzyme';
import App from '../app.component';

describe('App component', () => {
    let state;
    state = {
        activePage: 'globalSearch',
        selectedMovie: null,
    };
    describe('with globalSearch component', () => {
        it('should render <App> with <SearchPage>', () => {
            const component = shallow(<App {...state}/>);

            expect(component).toMatchSnapshot();
        });
    });

    describe('with movieDetail component', () => {
        state = {
            activePage: 'movieDetail',
            selectedMovie: null,
        };

        it('should render <App> with <MovieDetailPage>', () => {
            const component = shallow(<App {...state}/>);

            component.update();
            expect(component).toMatchSnapshot();
        });
    });
});
