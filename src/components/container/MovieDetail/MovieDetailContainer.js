import React, {Fragment} from "react";
import HeaderDetailContainer from "../HeaderDetail/HeaderDetailContainer";
import CardsContainer from "../CardsContainer/CardsContainer";
import TextBlock from "../../presentational/TextBlock";
import {SORT_ORDER, SORT_TYPE, SEARCH_BY, getMovies} from '../../../utils';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
        };
    }

    render() {
        const {movies} = this.state;
        const {selectedMovie, changeToGlobalSearchPage} = this.props;

        return (
          <Fragment>
              <HeaderDetailContainer
                selectedMovie={selectedMovie}
                changeToGlobalSearchPage={changeToGlobalSearchPage}/>
              <main className="main">
                  <TextBlock className="sort-by-genre" text={`Films by ${selectedMovie[0].genres[0]} genre`}/>
                  <CardsContainer movies={movies}
                                  handleImageClick={this.handleImageClick}/>
              </main>
          </Fragment>
        );
    }

    handleImageClick = (event) => {
        let selectedMovie = this.state.movies.filter(
          (movie) => movie.id === Number(event.target.parentNode.getAttribute('data-movie-id')));
        if (selectedMovie)
            this.props.changeToMovieDetailPage({selectedMovie});
    };

    componentWillMount() {
        this.fetchMovies();
    }

    fetchMovies = () => {
        getMovies({
            sortBy: SORT_TYPE.rating,
            sortOrder: SORT_ORDER.descending,
            search: this.props.selectedMovie[0].genres[0],
            searchBy: SEARCH_BY.genres,
            success: (resp) => {
                this.setState({movies: resp.data});
            },
        });
    };

    shouldComponentUpdate(nextProps, nextState) {
        return !(this.state.movies.length === nextState.movies.length
          && this.props.selectedMovie[0].id === nextProps.selectedMovie[0].id);
    }
}

export default AppContainer;