/*
* Search page container
* */
import {changeFilter, changeInput, changeSort, fetchMovies} from "../../../store/search/search.action";

export const mapStateToProps = (state, props) => {
    return {
        movies: state.search.movies,
        searchFieldValue: state.search.searchFieldValue,
        activeFilter: state.search.activeFilter,
        activeSortByLink: state.search.activeSortByLink,
        loading: state.search.loading,
    };
};

export const mapDispatchToProps = {
    changeFilter,
    changeSort,
    changeInput,
    fetchMovies,
};
