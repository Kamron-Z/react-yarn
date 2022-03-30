const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: "Marguerite", imgUrl: '', newMessage: 3},
        {id: 2, name: "Campbell", imgUrl: '', newMessage: 0},
        {id: 3, name: "Sasha", imgUrl: '', newMessage: 4},
        {id: 4, name: "Alex", imgUrl: '', newMessage: 0},
    ],
    messages: [
        {
            id: 1,
            name: 'Katrina Winter',
            message: "Yeah everything is fine. Our next meeting tomorrow 10.00 AM",
            imgUrl: '',
        },
        {id: 2, name: 'Winter', message: "Marguerite", imgUrl: ''},
        {id: 3, name: 'Make', message: "hi", imgUrl: ''},
    ],
    newMessageText: 'message New'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let copyState = {...state}
            let newPost = {
                id: state.messages.length + 1,
                message: state.newMessageText,
                name: '',
                imgUrl: ''
            }
            copyState.messages = [...state.messages]
            copyState.messages.push(newPost)
            copyState.newMessageText = ''
            return copyState
        case UPDATE_MESSAGE_TEXT: {
            let copyState = {...state}
            copyState.newMessageText = action.newText
            return copyState
        }
        default:
            return state
    }
}

export const addMessageCreator = () => {

    return {
        type: ADD_MESSAGE
    }
}
export const newMessageElementCreator = (newText) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newText: newText
    }
}

export default dialogsReducer