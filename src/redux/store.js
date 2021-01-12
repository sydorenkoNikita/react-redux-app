// import dialogsReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";

// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { id: 1, message: "Hi, how are you?" },
//                 { id: 2, message: "Hello world" },
//                 { id: 3, message: "Hey" }
//             ],
//             newPostText: 'leave a post'
//         },
//         dialogPage: {
//             dialogs: [
//                 { id: 1, name: "Nikita" },
//                 { id: 2, name: "Artem" },
//                 { id: 3, name: "Eric" },
//                 { id: 4, name: "Anya" }

//             ],
//             messages: [
//                 { id: 1, message: "Hello" },
//                 { id: 2, message: "Yo" },
//                 { id: 3, message: "How are you" }
//             ],
//             newMessageBody: ""
//         }
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
//         this._callSubscriber(this._state);
//     }
// }

// window.store = store;

// export default store;