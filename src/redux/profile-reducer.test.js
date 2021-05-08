import profileReducer, { addPost,deletePost } from "./profile-reducer";

let state = {
        posts: [
        {id: 1, message:'hello', likeCount: 44 },
        {id: 2, message:'It\'s my new blog', likeCount: 23 },
        {id: 3, message:'Yo', likeCount: 31 },
        {id: 4, message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum reprehenderit fuga at corporis a modi adipisci doloribus ullam accusamus laboriosam quasi et laborum dolore, quisquam saepe consequatur sed odio!', likeCount: 1 },
    ]
};

test('length of posts should be incremented', () => {
    let action = addPost('lfj');

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(5);
})

test('message of new posts should be correct', () => {
    let action = addPost('lfj');

    let newState = profileReducer(state,action);

    expect(newState.posts[4].message).toBe('lfj');
})

test('after deleting length of posts should be decremented', () => {
    let action = deletePost(2);

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(3);
})

test(`after deleting length of posts shouldn't be decremented if id is incorrect`, () => {
    let action = deletePost(200);

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(4);
})