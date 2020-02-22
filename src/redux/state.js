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
            ]
        }

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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 10,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}


window.store = store;

export default store;