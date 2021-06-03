import { newsAPI } from "../api/api";

const SET_NEWS = 'newsPage/SET_NEWS';
const SET_TOTAL_RESULT = 'newsPage/SET_TOTAL_RESULT';
const TOGGLE_IS_FETCING = 'newsPage/TOGGLE_IS_FETCING';
const SET_CURRENT_PAGE = 'newsPage/SET_CURRENT_PAGE';
const SET_COUNTRY = 'newsPage/SET_COUNTRY';


let inintialState = {
    news: [], 
    pageSize: 10,
    totalResults: 0,
    page: 1,
    isFetching: false,
    country: 'us',
    countries: [
        ['us', 'USA'],
        ['ua', 'Ukraine'],
        ['ru', 'Russia'],
    ],
 };
const newsReducer = (state = inintialState, action) => {
    
    switch(action.type){
        case SET_NEWS:
            return {
                ...state,
                news: [...action.payload],
            }
        case SET_TOTAL_RESULT:
            return {
                ...state,
                totalResults: action.payload,
            }
        case TOGGLE_IS_FETCING:
            return {
                ...state,
                isFetching: action.payload,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                page: action.payload,
            }
        case SET_COUNTRY:
            return {
                ...state,
                country: action.payload,
            }
        default: 
            return state;
    }
}


export const setNews = (news) => ({ type: SET_NEWS, payload: news });
export const setTotalResults = (totalResults) => ({ type: SET_TOTAL_RESULT, payload: totalResults });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCING, payload: isFetching });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page });
export const setCountry = (country) => ({ type: SET_COUNTRY, payload: country });


export const requestNews = (country,page,pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    const {status, totalResults, articles} = await newsAPI.getNews(country,page,pageSize);
    if(status === 'ok'){
        dispatch(toggleIsFetching(false));
        dispatch(setTotalResults(totalResults));
        dispatch(setNews(articles));    
    }
}

export const requestCountry = (country,page,pageSize) => (dispatch) => {
    dispatch(requestNews(country,page,pageSize));
    dispatch(setCountry(country));
}

export default newsReducer;