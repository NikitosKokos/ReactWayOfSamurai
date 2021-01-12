import dialogsReducer from "./dialogs-reducer";
import headerReducer from "./header-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
           newPostText: 'it-camasutra',
           posts: [
            {id: 1, message:'hello', likeCount: 44 },
            {id: 2, message:'It\'s my new blog', likeCount: 23 },
            {id: 3, message:'Yo', likeCount: 31 },
            {id: 4, message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum reprehenderit fuga at corporis a modi adipisci doloribus ullam accusamus laboriosam quasi et laborum dolore, quisquam saepe consequatur sed odio!', likeCount: 1 },
          ], 
        },
        dialogsPage: {
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
        },
        sidebar: {
            active: false,
            friends: [
                {id: 1, name: 'Denis', avatar: 'https://www.flaticon.com/svg/static/icons/svg/1503/1503833.svg'},
                {id: 2, name: 'Inga', avatar: 'https://www.flaticon.com/svg/static/icons/svg/1503/1503038.svg'},
                {id: 3, name: 'Mr. Gleb The Best', avatar: 'https://www.flaticon.com/svg/static/icons/svg/1503/1503238.svg'},
            ]
        },
        header: {
            burgerActive: false,
        }
        
    },
    _callSubscriber() {

    },
    getState() {
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.header =headerReducer({ header:this._state.header, sidebar: this._state.sidebar}, action);

        this._callSubscriber(this._state);
    }

}






export default store;