import React from 'react';
import {shallow} from 'enzyme';
import MovieDescription from '../movie-description.component';

describe('MovieDescription component', () => {
    let props;
    beforeEach(() => {
        props = {
            selectedMovie: [{
                title: 'Harry Potter',
                runtime: '250',
                tagline: 'Film tagline',
                overview: 'This film is about greatness',
                release_date: '20.05.2018',
                poster_path: 'https://puu.sh/Dl8Lx/d4fcc4e5e6.png',
            }],
            changeToGlobalSearchPage: jest.fn(),
        };
    });

    it('should render <MovieDescription> correctly', () => {
        const component = shallow(<MovieDescription {...props}/>);

        expect(component).toMatchSnapshot();
    });
});
