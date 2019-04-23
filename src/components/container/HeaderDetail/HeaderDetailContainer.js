import React, {Fragment} from "react";
import Button from '../../presentational/Button';
import TextBlock from '../../presentational/TextBlock';
import CardImage from '../../presentational/CardImage'

class ItemDescriptionContainerContainer extends React.PureComponent {
    render() {
        const {changeToGlobalSearchPage} = this.props;
        const {title, runtime, tagline, overview, release_date, poster_path} = this.props.selectedMovie[0];

        return (
          <header className="header header-movie-detail">
              <div className="header-context">
                  <TextBlock className="title" text="netflixroulette"/>
                  <Button onClick={changeToGlobalSearchPage}
                          className="back-to-search-btn"
                          id="backToSearch"
                          text="search"/>
                  <div className="description-container">
                      <CardImage className="image" src={poster_path}/>
                      <div className="description">
                          <TextBlock className="title" text={title}/>
                          <TextBlock className="subtitle" text={tagline}/>
                          <div className="sub-description">
                              <TextBlock className="year" text={new Date(release_date).getFullYear()}/>
                              <TextBlock className="duration" text={`${runtime} min`}/>
                          </div>
                          <TextBlock className="overview" text={overview}/>
                      </div>
                  </div>
              </div>
          </header>
        );
    }
}

export default ItemDescriptionContainerContainer;