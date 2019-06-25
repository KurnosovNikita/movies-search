/*
* Movie detail page container
* */
import {fetchMoviesByGenre} from "../../../store/movie-detail/movie-detail.action";

export const mapStateToProps = (state, props) => {
    return {
        movies: state.movieDetail.moviesByGenre,
        loading: state.movieDetail.loading,
    };
};

export const mapDispatchToProps = {
    fetchMoviesByGenre,
};
