import React, {Fragment} from "react";
import Cards from '../../common/cards/cards.component';
import Text from '../../base/text/text.component';
import InfoPanel from '../../common/info-panel/info-panel.component';

class Main extends React.PureComponent {
    render() {
        const {movies, activeSortByLink, handleSortLinkClick, handleImageClick} = this.props;

        return (
          <main className="main">
              {movies.length ? (
                <Fragment>
                    <InfoPanel moviesQuantity={movies.length}
                                        activeSortByLink={activeSortByLink}
                                        handleSortLinkClick={handleSortLinkClick}/>
                    <Cards movies={movies}
                                     handleImageClick={handleImageClick}/>
                </Fragment>
              ) : (
                <Text className="no-results" text='No  films found'/>
              )}
          </main>
        );
    }
}

export default Main;