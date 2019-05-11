import React, {Component} from "react";
import MovieCard from '../movie-card/movie-card.component';
import map from 'lodash/map';
import './cards.scss';

class Cards extends Component {

    render() {
        const {movies, handleImageClick} = this.props;
        const movieList = map(movies, (movie, index) =>
          <MovieCard movie={movie} key={index} handleImageClick={handleImageClick}/>
        );

        return (
          <div className="cards-container">
              {movieList}
          </div>
        );
    }
}

export default Cards;