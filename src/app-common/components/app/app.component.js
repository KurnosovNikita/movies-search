import React from "react";
import BasePage from '../pages/base/base.component';
import SearchPage from '../pages/search/search.component';
import MovieDetailPage from '../pages/movie-detail/movie-detail.component';
import './app.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 'globalSearch',
            selectedMovie: null,
        };
    }

    render() {
        const {activePage, selectedMovie} = this.state;
        let currentPage;

        switch (activePage) {
            case 'globalSearch':
                currentPage = <SearchPage changeToMovieDetailPage={this.changeToMovieDetailPage}/>;
                break;
            case 'movieDetail':
                currentPage = <MovieDetailPage selectedMovie={selectedMovie}
                                                    changeToMovieDetailPage={this.changeToMovieDetailPage}
                                                    changeToGlobalSearchPage={this.changeToGlobalSearchPage}/>;
                break;
            default:
                break;
        }
        return (
          <BasePage data={currentPage}/>
        );
    }

    changeToMovieDetailPage = ({selectedMovie}) => {
        this.setState({selectedMovie: selectedMovie, activePage: 'movieDetail'});
    }

    changeToGlobalSearchPage = () => {
        this.setState({selectedMovie: [], activePage: 'globalSearch'});
    }
}

export default App;