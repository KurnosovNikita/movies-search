import React, {Component, Fragment} from "react";
import MovieCard from '../movie-card/movie-card.component';
import map from 'lodash/map';
import './cards.scss';

class Cards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            moviesByGenre: null,
            hasError: false,
        }
    }

    render() {
        const {movies, handleImageClick} = this.props;
        const movieList = map(movies, (movie, index) =>
          <MovieCard movie={movie} key={index} handleImageClick={handleImageClick}/>
        );

        return (
          !this.state.hasError && (
            <div className="cards-container">
                {movieList}
            </div>
          ));
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }
}

Cards.defaultProps = {
    movies: [],
    moviesByGenre: [],
};

export default Cards;