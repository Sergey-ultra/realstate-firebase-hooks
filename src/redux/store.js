import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'How are you', likesCount: 4},
                {id: 2, message: 'How are you', likesCount: 23},
                {id: 3, message: 'first like', likesCount: 1},
                {id: 4, message: 'Yo', likesCount: 7},
                {id: 5, message: 'Yo', likesCount: 12}
            ],
            newPostText: ''
        },
        dialogsPage: {

            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'you'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            dialogs: [
                {id: 1, name: 'Sergey'},
                {id: 2, name: 'Vasay'},
                {id: 3, name: 'Bobik'},
                {id: 4, name: 'Masha'},
                {id: 5, name: 'Sveta'}
            ],
            newMessageBody: ''
        },
        sidebar: {}

    },
    _callSubscriber() {
        console.log('State was changed!')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state)
    }
}


window.store = store;

export default store;