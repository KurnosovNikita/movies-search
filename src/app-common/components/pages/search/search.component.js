import React, {Fragment} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Header from '../../../../common/header/header.component';
import Main from '../../../../common/main/main.component';
import {SORT_ORDER, SORT_TYPE, SEARCH_BY} from '../../../../utils';
import {mapStateToProps, mapDispatchToProps} from './search.container';
import './search.scss';

class Search extends React.Component {

    handleFilterChange = (event) => {
        this.props.changeFilter(event);
    };

    handleFieldInput = (event) => {
        this.props.changeInput(event);
    };

    handleImageClick = (event) => {
        const {handleSelectedMovie, movies} = this.props;
        const selectedMovie = movies.filter(
          (movie) => movie.id === Number(event.target.closest('.card').getAttribute('data-movie-id')));

        handleSelectedMovie({selectedMovie});
    };

    handleFieldKeyDown = (event) => {
        let keyCode = event.which || event.keyCode;

        if (keyCode === 13) {
            const data = this.getRequestParams();

            this.props.fetchMovies(this.updateSearchURL(data));
        }
    };

    handleSortLinkClick = (event) => {
        const {movies, changeSort} = this.props,
        data = {
            event,
            movies: movies,
        };

        changeSort(data);
    };

    handleSearchClick = () => {
        const data = this.getRequestParams();

        this.props.fetchMovies(this.updateSearchURL(data));
    };

    getSearchParamsURL = (location) => {
        const searchParams = new URLSearchParams(location.search);
        return {
            sortBy: searchParams.get('sortBy') || '',
            sortOrder: searchParams.get('sortOrder') || '',
            search: searchParams.get('search') || '',
            searchBy: searchParams.get('searchBy') || '',
        };
    };

    setSearchParamsURL = ({sortBy = '', sortOrder = '', search = '', searchBy = '',}) => {
        const searchParams = new URLSearchParams();
        searchParams.set("sortBy", sortBy);
        searchParams.set("sortOrder", sortOrder);
        searchParams.set("search", search);
        searchParams.set("searchBy", searchBy);
        return searchParams.toString();
    };

    updateSearchURL = ({sortBy, sortOrder, search, searchBy}) => {
        const {location, history} = this.props;

        const {
            sortBy: oldSortBy,
            sortOrder: oldSortOrder,
            search: oldSearch,
            searchBy: oldSearchBy,
        } = this.getSearchParamsURL(
          location.search,
        );
        const updatedSortBy = sortBy || oldSortBy;
        const updatedSortOrder = sortOrder || oldSortOrder;
        const updatedSearch = search || oldSearch;
        const updatedSearchBy = searchBy || oldSearchBy;
        const updatedData = {
            sortBy: updatedSortBy,
            sortOrder: updatedSortOrder,
            search: updatedSearch,
            searchBy: updatedSearchBy,
        };

        history.push(
          `?${this.setSearchParamsURL(updatedData)}`,
        );

        return updatedData;
    };

    getRequestParams = () => {
        return {
            sortBy: SORT_TYPE[this.props.activeSortByLink],
            sortOrder: SORT_ORDER.descending,
            search: this.props.searchFieldValue,
            searchBy: SEARCH_BY[this.props.activeFilter],
        };
    };

    shouldComponentUpdate(nextProps, nextState) {
        let hasEqualValues = true;
        const {movies} = this.props,
          isMoviesLengthEquals = movies.length === nextProps.movies.length,
          isMoviesInTheSameOrder = movies.filter(
            (item, index) => item.id === nextProps.movies[index].id).length === movies.length;

        for (let key in this.props) {
            if (this.props.hasOwnProperty(key)
              && typeof this.props[key] !== 'object'
              && this.props[key] !== nextProps[key])
                hasEqualValues = false;
        }

        return !(hasEqualValues && isMoviesLengthEquals
          && isMoviesInTheSameOrder);   
    }

    componentDidMount() {
        const {location, fetchMovies} = this.props,
          data = this.getSearchParamsURL(location),
          {sortBy, sortOrder, search, searchBy} = data;

        if (sortBy || sortOrder || search || searchBy) {
            fetchMovies(this.updateSearchURL(data));
        }
    }

    render() {
        const {activeFilter, movies, activeSortByLink} = this.props;

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
    };
}

Search.propTypes = {
    changeFilter: PropTypes.func.isRequired,
    changeSort: PropTypes.func.isRequired,
    changeInput: PropTypes.func.isRequired,
    fetchMovies: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);