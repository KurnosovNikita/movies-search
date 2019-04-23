import React, {Fragment} from 'react';
import SearchField from '../../presentational/SearchField';
import Button from '../../presentational/Button';
import TextBlock from '../../presentational/TextBlock';

class HeaderContainer extends React.PureComponent {
    render() {
        const {activeFilter, handleFieldInput, handleFieldKeyDown, handleFilterChange, handleSearchClick} = this.props;

        return (
          <header className='header'>
              <div className='header-context'>
                  <Fragment>
                      <TextBlock className='title' text='netflixroulette'/>
                      <TextBlock className='subtitle' text='Find your movie'/>
                      <SearchField onInput={handleFieldInput}
                                   onKeyDown={handleFieldKeyDown}
                                   className={'search-field'}
                                   placeholder={'Enter to search'}/>
                      <div className='filter-container'>
                          {React.createElement('span', {}, 'search by')}
                          <Button onClick={handleFilterChange}
                                  className={`filter-btn${activeFilter === 'title' ? ' active' : ''}`}
                                  id='title'
                                  text='title'/>
                          <Button onClick={handleFilterChange}
                                  className={`filter-btn${activeFilter === 'genres' ? ' active' : ''}`}
                                  id='genres'
                                  text='genre'/>
                          <Button onClick={handleSearchClick}
                                  className='search-btn'
                                  text='search'/>
                      </div>
                  </Fragment>
              </div>
          </header>
        );
    }
}

export default HeaderContainer;