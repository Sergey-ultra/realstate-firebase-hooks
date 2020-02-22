import {rerenderEntireTree} from "../render";

let state = {
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

}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 10,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}


export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;