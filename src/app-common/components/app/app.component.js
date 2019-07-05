import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import SearchPage from '../pages/search/search.component';
import MovieDetailPage from '../pages/movie-detail/movie-detail.component';
import NotFoundPage from '../pages/not-found/not-found.component';
import { Route, Switch} from 'react-router-dom';
import {changeSelectedMovie} from "../../store/app/app.action";
import './app.scss';
import Footer from "../../../common/footer/footer.component";

class App extends React.Component {

    handleSelectedMovie = ({selectedMovie}) => {
        this.props.changeSelectedMovie(selectedMovie);
    };

    render() {
        const {selectedMovie} = this.props;

        return (
          <div>
              <div className="wrapper">
                  <Switch>
                      <Route
                        exact
                        path='/'
                        component={({location, history}) =>
                          <SearchPage location={location}
                                      history={history}
                                      handleSelectedMovie={this.handleSelectedMovie}/>}
                      />
                      <Route path='/film/'
                             component={() =>
                               <MovieDetailPage selectedMovie={selectedMovie}
                                                handleSelectedMovie={this.handleSelectedMovie}
                               />}
                      />
                      <Route component={NotFoundPage}
                      />
                  </Switch>
              </div>
              <Footer footerClassName="footer" contextClassName="footer-content"/>
          </div>
        );
    }
}

App.propTypes = {
    changeSelectedMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
    return {
        selectedMovie: state.app.selectedMovie,
    };
};

const mapDispatchToProps = {
    changeSelectedMovie,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);