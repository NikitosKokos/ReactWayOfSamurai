import { newsAPI } from "../api/api";

const SET_NEWS = 'SET_NEWS';
const SET_TOTAL_RESULT = 'SET_TOTAL_RESULT';
const TOGGLE_IS_FETCING = 'TOGGLE_IS_FETCING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


let inintialState = {
    news: [], 
    pageSize: 10,
    totalResults: 0,
    page: 1,
    isFetching: false,
    country: 'us',
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
        default: 
            return state;
    }
}


export const setNews = (news) => {
    return {
        type: SET_NEWS,
        payload: news
    }
}

export const setTotalResults = (totalResults) => {
    return {
        type: SET_TOTAL_RESULT,
        payload: totalResults
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCING,
        payload: isFetching
    }
};

export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page
    }
};


export const requestNews = (country,page,apiKey) => {
    return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    newsAPI.getNews(country,page,apiKey).then(({status, totalResults, articles}) => {
        if(status === 'ok'){
            dispatch(toggleIsFetching(false));
            dispatch(setTotalResults(totalResults));
            dispatch(setNews(articles));    
        }
    });
    }  
}

export default newsReducer;