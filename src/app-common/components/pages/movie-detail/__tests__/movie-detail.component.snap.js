import React from 'react';
import {shallow} from 'enzyme';
import MovieDetail from '../movie-detail.component';
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

describe('MovieDetail component', () => {
    let props,
      state;
    beforeEach(() => {


        state = {
            movies: [],
        };
        props = {
            selectedMovie: [{
                id: 505,
                genres: ['drama', 'comedy', 'triller'],
                title: 'Harry Potter',
                release_date: '20.05.2018',
                poster_path: 'https://puu.sh/Dl8Lx/d4fcc4e5e6.png',
            }],
            changeToGlobalSearchPage: jest.fn(),
        };

    });

    it('should render <MovieDetail> correctly', () => {
        const component = shallow(
          <Provider store={store}>
              <MovieDetail {...props}/>
          </Provider>);

        expect(component).toMatchSnapshot();
    });
});
