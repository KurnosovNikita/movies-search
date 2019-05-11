import React, {Fragment} from "react";
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
import {
    fetchMoviesByGenre
} from "../../../store/movie-detail/movie-detail.action";
import './movie-detail.scss';

class MovieDetail extends React.Component {

    handleImageClick = (event) => {
        let selectedMovie = this.props.movies.filter(
          (movie) => movie.id === Number(event.target.closest('.card').getAttribute('data-movie-id')));
        if (selectedMovie) {
            this.props.handleSelectedMovie({selectedMovie});
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
        return !(this.props.movies.length === nextProps.movies.length
          && this.props.selectedMovie[0].id === nextProps.selectedMovie[0].id && this.props.movies.filter(
            (item, index) => item.id === nextProps.movies[index].id).length === this.props.movies.length);
    }

    render() {
        const {movies, selectedMovie} = this.props;

        return (
          <Fragment>
              <MovieDescription
                selectedMovie={selectedMovie}/>
              <main className="main">
                  <Text className="sort-by-genre" text={`Films by ${selectedMovie[0].genres[0]} genre`}/>
                  <Cards movies={movies}
                         handleImageClick={this.handleImageClick}/>
              </main>
          </Fragment>
        );
    }
}

MovieDetail.propTypes = {
    fetchMoviesByGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
    return {
        movies: state.movieDetail.moviesByGenre,
        loading: state.movieDetail.loading,
    };
};

const mapDispatchToProps = {
    fetchMoviesByGenre,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetail);
