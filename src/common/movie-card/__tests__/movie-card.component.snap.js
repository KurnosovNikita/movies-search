import React from 'react';
import {shallow} from 'enzyme';
import MovieCard from '../movie-card.component';

describe('MovieCard component', () => {
    let props;
    beforeEach(() => {
        props = {
            movie: {
                id: 505,
                genres: ['drama', 'comedy', 'triller'],
                title: 'Harry Potter',
                release_date: '20.05.2018',
                poster_path: 'https://puu.sh/Dl8Lx/d4fcc4e5e6.png',
            },
        };
    });

    it('should render <MovieCard> correctly', () => {
        const component = shallow((<MovieCard {...props} />));

        expect(component).toMatchSnapshot();
    });
});
