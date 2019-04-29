import React, {Fragment} from "react";
import Header from '../../../../common/header/header.component';
import Main from '../../../../common/main/main.component';
import {SORT_ORDER, SORT_TYPE, SEARCH_BY, getMovies} from '../../../../utils';
import './search.scss';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            searchFieldValue: '',
            activeFilter: 'title',
            activeSortByLink: 'rating',
        };
    }

    render() {
        const {activeFilter, movies, activeSortByLink} = this.state;

        return (
          <Fragment>
              <Header activeFilter={activeFilter}
                      handleFilterChange={this.handleFilterChange}
                      handleSearchClick={this.handleSearchClick}
                      handleFieldInput={this.handleFieldInput}
                      handleFieldKeyDown={this.handleFieldKeyDown}/>
              <Main movies={movies}
                    activeSortByLink={activeSortByLink}
                    handleSortLinkClick={this.handleSortLinkClick}
                    handleImageClick={this.handleImageClick}/>
          </Fragment>
        );
    }

    handleFilterChange = (event) => {
        this.setState({activeFilter: event.target.id});
    };

    handleFieldInput = (event) => {
        this.setState({searchFieldValue: event.target.value});
    };

    handleImageClick = (event) => {
        const selectedMovie = this.state.movies.filter(
          (movie) => movie.id === Number(event.target.parentNode.getAttribute('data-movie-id')));

        this.props.changeToMovieDetailPage({selectedMovie});
    };

    handleFieldKeyDown = (event) => {
        let keyCode = event.which || event.keyCode;

        if (keyCode === 13) {
            this.fetchMovies();
        }
    };
    compareSortTypes = (movieA, movieB) => {
        if (movieA[SORT_TYPE[event.target.id]] > movieB[SORT_TYPE[event.target.id]])
            return -1;
        if (movieA[SORT_TYPE[event.target.id]] < movieA[SORT_TYPE[event.target.id]])
            return 1;
        return 0;
    };


    handleSortLinkClick = (event) => {
        this.setState({
            activeSortByLink: event.target.id,
            movies: this.state.movies.sort(this.compareSortTypes),
        });
    };

    handleSearchClick = () => {
        this.fetchMovies();
    };

    fetchMovies = () => {
        getMovies({
            sortBy: SORT_TYPE[this.state.activeSortByLink],
            sortOrder: SORT_ORDER.descending,
            search: this.state.searchFieldValue,
            searchBy: SEARCH_BY[this.state.activeFilter],
        })
          .then((resp)=>resp.json())
          .then((resp) => {
              this.setState({movies: resp.data});
          });
    };

    shouldComponentUpdate(nextProps, nextState) {
        let hasEqualValues = true;

        for (let key in this.state) {
            if (this.state.hasOwnProperty(key)
              && typeof this.state[key] !== 'object'
              && this.state[key] !== nextState[key])
                hasEqualValues = false;
        }

        return !(hasEqualValues && this.state.movies.length === nextState.movies.length
          && this.state.movies.filter(
            (item, index) => item.id === nextState.movies[index].id).length === this.state.movies.length);
    }
}

export default Search;