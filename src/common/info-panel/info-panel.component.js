import React from "react";
import Link from '../../base/link/link.component';
import './info-panel.scss';

class InfoPanel extends React.PureComponent {

    render() {
        const {moviesQuantity, handleSortLinkClick, activeSortByLink} = this.props;
        return (
          <div className="info-panel-container">
              <div className="movies-quantity">{moviesQuantity} movies found</div>
              <div className="sort-by-container">
                  <span className="sort-by-title">Sort By</span>
                  <Link onClick={handleSortLinkClick}
                              className={`sort-link${activeSortByLink === 'releaseDate' ? ' active' : ''}`}
                              id="releaseDate"
                              text="release date"/>
                  <Link onClick={handleSortLinkClick}
                              className={`sort-link${activeSortByLink === 'rating' ? ' active' : ''}`}
                              id="rating"
                              text="rating"/>
              </div>
          </div>
        );
    }
}

export default InfoPanel;