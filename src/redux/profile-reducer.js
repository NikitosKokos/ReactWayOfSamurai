const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let inintialState = {
    newPostText: '',
    posts: [
     {id: 1, message:'hello', likeCount: 44 },
     {id: 2, message:'It\'s my new blog', likeCount: 23 },
     {id: 3, message:'Yo', likeCount: 31 },
     {id: 4, message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum reprehenderit fuga at corporis a modi adipisci doloribus ullam accusamus laboriosam quasi et laborum dolore, quisquam saepe consequatur sed odio!', likeCount: 1 },
   ], 
 };
const profileReducer = (state = inintialState, action) => {
    
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts,{
                    id: 5,
                    message: state.newPostText,
                    likeCount: 0,
                }]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        default: 
            return state;
    }
}

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
};

export default profileReducer;