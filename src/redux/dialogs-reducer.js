const ADD_MES = 'ADD-MES';
const UPDATE_NEW_MES_TEXT = 'UPDATE-NEW-MES-TEXT';

let inintialState = {
    newMesText: 'Xoxo',
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
            let newMes = {
                id: 5, 
                text: state.newMesText, 
                avatar: 'https://buki.com.ua/data/files/news/15542215853893.jpg'
            }
        
            state.messages.push(newMes);
            state.newMesText = '';
            return state;
        case UPDATE_NEW_MES_TEXT:
            state.newMesText = action.newText;
            return state;
        default: 
            return state;
}
}

export const addMesActionCreator = () => ({ type: ADD_MES });
export const updateNewMesTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MES_TEXT,
        newText: text,
    }
};

export default dialogsReducer;