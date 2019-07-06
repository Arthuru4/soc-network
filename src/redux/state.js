let renderEntireTree = null;

const state = {
    profilePage: {
        postData: [
            {text: 'Hi', likesCount: '1', id: 1},
            {text: 'Hello, How r u?', likesCount: '21', id: 2},
            {text: 'Cool, and u??', likesCount: '11', id: 3},
            {text: 'Hmm... green-green grass', likesCount: '2', id: 4},
        ],
        newPostInfo: 'it-kamasutra.com'
    },
    messagesData: {
        users: [
            {
                id: 1,
                name: 'Sasha',
                avaUrl: 'https://lastfm-img2.akamaized.net/i/u/60x60/0d62eee9165760ee9d6b72a2782d2e87.jpg'
            },
            {
                id: 2,
                name: 'Sveta',
                avaUrl: 'https://lastfm-img2.akamaized.net/i/u/60x60/0d62eee9165760ee9d6b72a2782d2e87.jpg'
            },
            {
                id: 3,
                name: 'Anton',
                avaUrl: 'https://lastfm-img2.akamaized.net/i/u/60x60/0d62eee9165760ee9d6b72a2782d2e87.jpg'
            },
            {
                id: 4,
                name: 'Vetal',
                avaUrl: 'https://lastfm-img2.akamaized.net/i/u/60x60/0d62eee9165760ee9d6b72a2782d2e87.jpg'
            },
            {
                id: 5,
                name: 'Pasha',
                avaUrl: 'https://lastfm-img2.akamaized.net/i/u/60x60/0d62eee9165760ee9d6b72a2782d2e87.jpg'
            },
            {
                id: 6,
                name: 'Vova',
            }
            // avaUrl: 'https://lastfm-img2.akamaized.net/i/u/60x60/0d62eee9165760ee9d6b72a2782d2e87.jpg'}
        ],
        messages: [
            {id: 1, message: 'someText Hi', yours: true},
            {id: 2, message: 'someText HiHi', yours: false},
            {id: 3, message: 'someText Holllo', yours: true},
            {id: 4, message: 'someText Vetal', yours: false},
            {id: 5, message: 'someText Pasha', yours: true},
            {id: 6, message: 'someText Vova', yours: false}
        ],
        newMessage: 'it_Arthuru4'
    },
    sideBar: {}
};

export const updateMessage = (val) => {
    state.messagesData.newMessage = val;

    renderEntireTree(state)
};

export const addMessage = () => {
    if (state.messagesData.newMessage) {
        let tempMsg = {message: state.messagesData.newMessage, yours: true, id: state.messagesData.messages.length};
        state.messagesData.messages.push(tempMsg);
        state.messagesData.newMessage = '';

        renderEntireTree(state)
    }
};

export const updatePost = (val) => {
    state.profilePage.newPostInfo = val;

    renderEntireTree(state)
};

export const addPost = () => {
    if (state.profilePage.newPostInfo) {
        const tempPost = {text: state.profilePage.newPostInfo, likesCount: 0, id: state.profilePage.postData.length};

        state.profilePage.postData.push(tempPost);
        state.profilePage.newPostInfo = '';

        renderEntireTree(state)
    }
};

export const subscribe = (observer) => {
    renderEntireTree = observer;
};

export default state;