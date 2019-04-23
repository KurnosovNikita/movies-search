import React, {Component, Fragment} from "react";
import CardItem from '../CardItem/CardItem';

class CardsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            moviesByGenre: null,
        }
    }

    render() {
        const {movies, handleImageClick} = this.props;

        return (
          <div className="cards-container">
              {movies.map((movie, index) => {
                  return <CardItem movie={movie} key={index} handleImageClick={handleImageClick}/>
              })}
          </div>
        );
    }
}

CardsContainer.defaultProps = {
    movies: [],
    moviesByGenre: [],
};

export default CardsContainer;