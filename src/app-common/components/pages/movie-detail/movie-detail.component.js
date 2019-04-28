import React, {Fragment} from "react";
import MovieDescription from '../../../../common/movie-description/movie-description.component';
import Cards from '../../../../common/cards/cards.component';
import Text from '../../../../base/text/text.component';
import {SORT_ORDER, SORT_TYPE, SEARCH_BY, getMovies} from '../../../../utils';

class MovieDetail extends React.Component {
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
              <MovieDescription
                selectedMovie={selectedMovie}
                changeToGlobalSearchPage={changeToGlobalSearchPage}/>
              <main className="main">
                  <Text className="sort-by-genre" text={`Films by ${selectedMovie[0].genres[0]} genre`}/>
                  <Cards movies={movies}
                         handleImageClick={this.handleImageClick}/>
              </main>
          </Fragment>
        );
    }

    handleImageClick = (event) => {
        let selectedMovie = this.state.movies.filter(
          (movie) => movie.id === Number(event.target.parentNode.getAttribute('data-movie-id')));
        if (selectedMovie) {
            this.props.changeToMovieDetailPage({selectedMovie});
            this.fetchMovies(selectedMovie);
        }
    };

    componentWillMount() {
        this.fetchMovies();
    }

    fetchMovies = (selectedMovie = this.props.selectedMovie) => {
        this.setState({movies: [{
            id: 1,
            genres: ['da'],
            title: 'title1',
            release_date: '02.04.2019',
            poster_path: 'https://ae01.alicdn.com/kf/HTB1gfbapy0TMKJjSZFNq6y_1FXah/Star-Wars-The-Last-Jedi-Movie-Poster-Episode-VIII-2017-Film-Art-Silk-Fabric-Poster-36.jpg',
        },{
            id: 2,
            genres: ['da'],
            title: 'title2',
            release_date: '02.04.2019',
            poster_path: 'https://ae01.alicdn.com/kf/HTB1gfbapy0TMKJjSZFNq6y_1FXah/Star-Wars-The-Last-Jedi-Movie-Poster-Episode-VIII-2017-Film-Art-Silk-Fabric-Poster-36.jpg',
        },{
            id: 3,
            genres: ['da'],
            title: 'title3',
            release_date: '02.04.2019',
            poster_path: 'https://ae01.alicdn.com/kf/HTB1gfbapy0TMKJjSZFNq6y_1FXah/Star-Wars-The-Last-Jedi-Movie-Poster-Episode-VIII-2017-Film-Art-Silk-Fabric-Poster-36.jpg',
        },{
            id: 4,
            genres: ['da'],
            title: 'title4',
            release_date: '02.04.2019',
            poster_path: 'https://ae01.alicdn.com/kf/HTB1gfbapy0TMKJjSZFNq6y_1FXah/Star-Wars-The-Last-Jedi-Movie-Poster-Episode-VIII-2017-Film-Art-Silk-Fabric-Poster-36.jpg',
        }]});
        getMovies({
            sortBy: SORT_TYPE.rating,
            sortOrder: SORT_ORDER.descending,
            search: selectedMovie[0].genres[0],
            searchBy: SEARCH_BY.genres,
            success: (resp) => {
                this.setState({movies: resp.data});
            },
        });
    };

    shouldComponentUpdate(nextProps, nextState) {
        return !(this.state.movies.length === nextState.movies.length
          && this.props.selectedMovie[0].id === nextProps.selectedMovie[0].id && this.state.movies.filter(
            (item, index) => item.id === nextState.movies[index].id).length === this.state.movies.length);
    }
}

export default MovieDetail;