import {reset} from 'redux-form';

const ADD_MES = 'ADD-MES';

let inintialState = {
    messages: [
        {id: 1, text: 'Hi Den!1', avatar: 'https://buki.com.ua/data/files/news/15542215853893.jpg'},
        {id: 2, text: 'Hello, how do you do?', avatar: 'https://www.flaticon.com/svg/static/icons/svg/1503/1503835.svg'},
        {id: 3, text: 'Good',  avatar: 'https://buki.com.ua/data/files/news/15542215853893.jpg'},
        {id: 4, text: 'Ok :)', avatar: 'https://www.flaticon.com/svg/static/icons/svg/1503/1503835.svg'},
    ],   
    dialogs: [
        {id: 1, name: 'Oleg'},
        {id: 2, name: 'Roma'},
        {id: 3, name: 'Den'},
        {id: 4, name: 'Boris'},
        {id: 5, name: 'Vika'},
        {id: 6, name: 'Olga'},
    ], 
};
const dialogsReducer = (state = inintialState, action) => {
    switch(action.type){
        case ADD_MES:
            return {
                ...state,
                messages: [ ...state.messages, {
                id: 5, 
                text: action.newMesText, 
                avatar: 'https://buki.com.ua/data/files/news/15542215853893.jpg'
            }]
            }
        default: 
            return state;
}
}

export const addMes = (newMesText) => ({ type: ADD_MES, newMesText });


export default dialogsReducer;