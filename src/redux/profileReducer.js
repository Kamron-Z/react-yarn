const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id: 1, message: "hi, how are you?", imgUrl: '', likesCount: 312},
        {id: 2, message: "it's my first post", imgUrl: '', likesCount: 314},
        {id: 3, message: "I want to learn a react Js", imgUrl: '', likesCount: 100},
    ],
    newPostText: 'react js'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_POST: {
            let copyState = {...state}
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                imgUrl: '',
                likesCount: 0
            }
            copyState.posts = [...state.posts]
            copyState.posts.push(newPost)
            copyState.newPostText = ''
            return copyState
        }
        case UPDATE_POST_TEXT: {
            let copyState = {...state}
            copyState.newPostText = action.newText
            return copyState
        }
        default:
            return state
    }
}

export const addPostCreator = () => {
    return {
        type: ADD_POST
    }
}
export const newPostElementCreator = (newText) => {

    return {
        type: UPDATE_POST_TEXT,
        newText: newText
    }
}

export default profileReducer