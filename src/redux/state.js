const state = {
    postData: [
        {text: 'Hi', likesCount: '1', id: 1},
        {text: 'Hello, How r u?', likesCount: '21', id: 2},
        {text: 'Cool, and u??', likesCount: '11', id: 3},
        {text: 'Hmm... green-green grass', likesCount: '2', id: 4},
    ],
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
        ]
    }
};

export default state;