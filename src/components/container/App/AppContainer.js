import React, {Fragment} from "react";
import FooterContainer from "../Footer/FooterContainer";
import GlobalSearchContainer from "../GlobalSearch/GlobalSearchContainer";
import MovieDetailContainer from "../MovieDetail/MovieDetailContainer";

class AppContainer extends React.Component {
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
                currentPage = <GlobalSearchContainer changeToMovieDetailPage={this.changeToMovieDetailPage}/>;
                break;
            case 'movieDetail':
                currentPage = <MovieDetailContainer selectedMovie={selectedMovie}
                                                    changeToMovieDetailPage={this.changeToMovieDetailPage}
                                                    changeToGlobalSearchPage={this.changeToGlobalSearchPage}/>;
                break;
            default:
                break;
        }
        return (
          <Fragment>
              <div className="wrapper">
                  {currentPage}
              </div>
              <FooterContainer footerClassName="footer" contextClassName="footer-content"/>
          </Fragment>
        );
    }

    changeToMovieDetailPage = ({selectedMovie}) => {
        this.setState({selectedMovie: selectedMovie, activePage: 'movieDetail'});
    }

    changeToGlobalSearchPage = () => {
        this.setState({selectedMovie: [], activePage: 'globalSearch'});
    }
}

export default AppContainer;