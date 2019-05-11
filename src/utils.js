const apiPath = 'https://reactjs-cdp.herokuapp.com/movies';

export const SORT_TYPE = {
    rating: 'vote_average',
    releaseDate: 'release_date',
};

export const SORT_ORDER = {
    ascending: 'asc',
    descending: 'desc',
};

export const SEARCH_BY = {
    title: 'title',
    genres: 'genres',
};

export const getMovies = ({sortBy, sortOrder, search, searchBy}) => {
    const url = apiPath + `?sortBy=${sortBy}&sortOrder=${sortOrder}&search=${search}&searchBy=${searchBy}`;

    return fetch(url, {
        method: 'GET',
        contentType: 'application/json',
    })
      .catch((error) => {
          throw new Error('Can not get Movie', error);
      });
};
