import React from "react";
import Button from '../../base/button/button.component';
import Text from '../../base/text/text.component';
import Image from '../../base/image/image.component';
import {Link} from 'react-router-dom';
import './movie-description.scss';

class MovieDescription extends React.PureComponent {
    render() {
        const {changeToGlobalSearchPage} = this.props;
        const {title, runtime, tagline, overview, release_date, poster_path} = this.props.selectedMovie[0];

        return (
          <header className="header header-movie-detail">
              <div className="header-context">
                  <Text className="title" text="netflixroulette"/>
                  <Link to='/'>
                      <Button onClick={changeToGlobalSearchPage}
                              className="back-to-search-btn"
                              id="backToSearch"
                              text="search"/>
                  </Link>
                  <div className="description-container">
                      <Image className="image" src={poster_path}/>
                      <div className="description">
                          <Text className="title" text={title}/>
                          <Text className="subtitle" text={tagline}/>
                          <div className="sub-description">
                              <Text className="year" text={new Date(release_date).getFullYear().toString()}/>
                              <Text className="duration" text={`${runtime} min`}/>
                          </div>
                          <Text className="overview" text={overview}/>
                      </div>
                  </div>
              </div>
          </header>
        );
    }
}

export default MovieDescription;
