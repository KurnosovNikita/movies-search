import React, {Fragment} from "react";
import CardsContainer from '../CardsContainer/CardsContainer';
import TextBlock from "../../presentational/TextBlock";
import InfoPanelContainer from '../InfoPanelContainer/InfoPanelContainer';

class MainContainer extends React.PureComponent {
    render() {
        const {movies, activeSortByLink, handleSortLinkClick, handleImageClick} = this.props;

        return (
          <main className="main">
              {movies.length ? (
                <Fragment>
                    <InfoPanelContainer moviesQuantity={movies.length}
                                        activeSortByLink={activeSortByLink}
                                        handleSortLinkClick={handleSortLinkClick}/>
                    < CardsContainer movies={movies}
                                     handleImageClick={handleImageClick}/>
                </Fragment>
              ) : (
                <TextBlock className="no-results" text='No films found'/>
              )}
          </main>
        );
    }
}

export default MainContainer;