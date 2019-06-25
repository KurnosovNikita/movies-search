import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import MovieDescription from '../../../../common/movie-description/movie-description.component';
import Cards from '../../../../common/cards/cards.component';
import Text from '../../../../base/text/text.component';
import {
    SORT_ORDER,
    SORT_TYPE,
    SEARCH_BY,
} from '../../../../utils';
import {mapDispatchToProps, mapStateToProps} from './movie-details.container';
import './movie-detail.scss';

class MovieDetail extends React.Component {

    handleImageClick = (event) => {
        const {movies, handleSelectedMovie} = this.props;
        let selectedMovie = movies.filter(
          (movie) => movie.id === Number(event.target.closest('.card').getAttribute('data-movie-id')));
        if (selectedMovie) {
            handleSelectedMovie({selectedMovie});
            this.fetchMovies(selectedMovie);
        }
    };

    componentWillMount() {
        this.fetchMovies();
    }

    fetchMovies = (selectedMovie = this.props.selectedMovie) => {
        const data = {
            sortBy: SORT_TYPE.rating,
            sortOrder: SORT_ORDER.descending,
            search: selectedMovie[0].genres[0],
            searchBy: SEARCH_BY.genres,
        };

        this.props.fetchMoviesByGenre(data);
    };

    shouldComponentUpdate(nextProps, nextState) {
        const {movies, selectedMovie} = this.props,
          isMoviesLengthEquals = movies.length === nextProps.movies.length,
          isSelectedMovieNotChanged = selectedMovie[0].id === nextProps.selectedMovie[0].id,
          isMoviesInTheSameOrder = movies.filter(
            (item, index) => item.id === nextProps.movies[index].id).length === movies.length;

        return !(isMoviesLengthEquals && isSelectedMovieNotChanged && isMoviesInTheSameOrder);
    }

    render() {
        const {movies, selectedMovie} = this.props;

        return (
          <div>
              <MovieDescription
                selectedMovie={selectedMovie}/>
              <main className="main">
                  <Text className="sort-by-genre" text={`Films by ${selectedMovie[0].genres[0]} genre`}/>
                  <Cards movies={movies}
                         handleImageClick={this.handleImageClick}/>
              </main>
          </div>
        );
    }
}

MovieDetail.propTypes = {
    fetchMoviesByGenre: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetail);
