import React from "react";
import LinkButton from '../../presentational/LinkButton';

class InfoPanelContainer extends React.PureComponent {

    render() {
        const {moviesQuantity, handleSortLinkClick, activeSortByLink} = this.props;
        return (
          <div className="info-panel-container">
              <div className="movies-quantity">{moviesQuantity} movies found</div>
              <div className="sort-by-container">
                  <span className="sort-by-title">Sort By</span>
                  <LinkButton onClick={handleSortLinkClick}
                              className={`sort-link${activeSortByLink === 'releaseDate' ? ' active' : ''}`}
                              id="releaseDate"
                              text="release date"/>
                  <LinkButton onClick={handleSortLinkClick}
                              className={`sort-link${activeSortByLink === 'rating' ? ' active' : ''}`}
                              id="rating"
                              text="rating"/>
              </div>
          </div>
        );
    }
}

export default InfoPanelContainer;