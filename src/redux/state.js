const store = {
    _state: {
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
    },
    addMessage() {
        if (this._state.messagesData.newMessage) {
            let tempMsg = {
                message: this._state.messagesData.newMessage,
                yours: true,
                id: this._state.messagesData.messages.length
            };
            this._state.messagesData.messages.push(tempMsg);
            this._state.messagesData.newMessage = '';

            this._callCallBack(this._state)
        }
    },
    getState(){
        return this._state;
    },
    updatePost(val) {
        this._state.profilePage.newPostInfo = val;

        this._callCallBack(this._state)
    },
    addPost() {
        if (this._state.profilePage.newPostInfo) {
            const tempPost = {
                text: this._state.profilePage.newPostInfo,
                likesCount: 0,
                id: this._state.profilePage.postData.length
            };

            this._state.profilePage.postData.push(tempPost);
            this._state.profilePage.newPostInfo = '';

            this._callCallBack(this._state)
        }
    },
    updateMessage(val) {
        this._state.messagesData.newMessage = val;

        this._callCallBack(this._state)
    },
    subscribe(callback) {
        this.callback = callback;
    },
    _callCallBack(val) {
        if (this.callback) this.callback(val)
    },
};

export default store;