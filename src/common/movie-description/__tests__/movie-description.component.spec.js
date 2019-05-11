import * as React from 'react';
import {mount} from 'enzyme';
import MovieDescription from '../movie-description.component';
import {BrowserRouter as Router} from 'react-router-dom';

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

    it('back to search button click should call changeToGlobalSearchPage', () => {
        const component = mount(
          <Router>
              <MovieDescription {...props}/>
          </Router>);
        component
          .find('button#backToSearch')
          .simulate('click');

        expect(props.changeToGlobalSearchPage).toHaveBeenCalled();
    });
});
