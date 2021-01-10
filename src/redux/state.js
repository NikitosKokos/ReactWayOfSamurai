
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
      if(action.type === 'ADD-POST'){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
      }else if(action.type === 'UPDATE-NEW-POST-TEXT'){
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
      }else if(action.type === 'ADD-MES'){
        let newMes = {
            id: 5, 
            text: this._state.dialogsPage.newMesText, 
            avatar: 'https://buki.com.ua/data/files/news/15542215853893.jpg'
        }
    
        this._state.dialogsPage.messages.push(newMes);
        this._state.dialogsPage.newMesText = '';
        this._callSubscriber(this._state);
      }else if(action.type === 'UPDATE-NEW-MES-TEXT'){
        this._state.dialogsPage.newMesText = action.newText;
        this._callSubscriber(this._state);
      }else if(action.type === 'CHANGE-STATE-MENU'){
        this._state.sidebar.active = action.newState;
        this._state.header.burgerActive = action.newState;
        this._callSubscriber(this._state);
      }

    }
    

}

export default store;