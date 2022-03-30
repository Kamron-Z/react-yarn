import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "hi, how are you?", imgUrl: '', likesCount: 312},
                {id: 2, message: "it's my first post", imgUrl: '', likesCount: 314},
                {id: 3, message: "I want to learn a react Js", imgUrl: '', likesCount: 100},
            ],
            newPostText: 'react js'
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state
    },
    _renderApp() {
        console.log('observer')
    },
    subscribe(observer) {
        this._renderApp = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._renderApp()
    }
}

window.store = store
export default store