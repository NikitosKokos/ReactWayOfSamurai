export const getNews = (state) => {
    return state.newsPage.news;
}

export const getPageSize = (state) => {
    return state.newsPage.pageSize;
}

export const getTotalResults = (state) => {
    return state.newsPage.totalResults;
}

export const getPage = (state) => {
    return state.newsPage.page;
}

export const getIsFetching = (state) => {
    return state.newsPage.isFetching;
}

export const getCountry = (state) => {
    return state.newsPage.country;
}

export const getCountries = (state) => {
    return state.newsPage.countries;
}