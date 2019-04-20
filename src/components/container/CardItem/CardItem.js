import React, {Fragment} from "react";
import CardImage from '../../presentational/CardImage';
import CardLabel from '../../presentational/CardLabel';
import CardContext from '../../presentational/CardContext';

class CardItem extends React.PureComponent {

    render() {
        const {id, genres, title, release_date, poster_path} = this.props.movie;

        return (
          <Fragment>
              <div className="card" data-movie-id={id}>
                  <CardImage className="card-image"
                             src={poster_path}
                             onClick={this.props.handleImageClick}/>
                  <div className="card-context">
                      <CardContext titleClassName="card-title"
                                   subtitleClassName="card-subtitle"
                                   title={title}
                                   subtitle={genres.join(' & ')}/>
                      <CardLabel className="card-label" text={new Date(release_date).getFullYear()}/>
                  </div>
              </div>
          </Fragment>
        );
    }
}

export default CardItem;