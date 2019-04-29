import React, {Fragment} from "react";
import Image from '../../base/image/image.component';
import './movie-card.scss';

class MovieCard extends React.PureComponent {

    render() {
        const {id, genres, title, release_date, poster_path} = this.props.movie;

        return (
              <div className="card" data-movie-id={id}>
                  <Image className="card-image"
                             src={poster_path}
                             onClick={this.props.handleImageClick}/>
                  <div className="card-context">
                      <div className="card-title">{title}</div>
                      <div className="card-subtitle">{genres.join(' & ')}</div>
                      <span className="card-label">{new Date(release_date).getFullYear()}</span>
                  </div>
              </div>
        );
    }
}

export default MovieCard;