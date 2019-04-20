import $ from 'jquery';

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

export const getMovies = ({sortBy, sortOrder, search, searchBy, success}) => {
    let data = {
        sortBy,
        sortOrder,
        search,
        searchBy,
    };

    return $.ajax({
        url: apiPath,
        data,
        contentType: 'application/json',
        success,
        error: (error) => {
            throw new Error('Can not get Movie', error);
        },
    });
};
