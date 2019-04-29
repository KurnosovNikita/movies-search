import React from 'react';
import Input from '../../base/input/input.component';
import Button from '../../base/button/button.component';
import Text from '../../base/text/text.component';
import './header.scss';

class Header extends React.PureComponent {
    render() {
        const {activeFilter, handleFieldInput, handleFieldKeyDown, handleFilterChange, handleSearchClick} = this.props;

        return (
          <header className='header'>
              <div className='header-context'>
                  <Text className='title' text='netflixroulette'/>
                  <Text className='subtitle' text='Find your movie'/>
                  <Input onInput={handleFieldInput}
                         onKeyDown={handleFieldKeyDown}
                         containerClassName="search-field-container"
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
              </div>
          </header>
        );
    }
}

export default Header;