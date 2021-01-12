const ADD_MES = 'ADD-MES';
const UPDATE_NEW_MES_TEXT = 'UPDATE-NEW-MES-TEXT';

const dialogsReducer = (state, action) => {

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