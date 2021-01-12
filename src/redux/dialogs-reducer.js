const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: "Nikita" },
        { id: 2, name: "Artem" },
        { id: 3, name: "Eric" },
        { id: 4, name: "Anya" }

    ],
    messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Yo" },
        { id: 3, message: "How are you" }
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
            return { 
                ...state, 
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return { 
                ...state, 
                newMessageBody: '',
                messages: [...state.messages, { id: 4, message: body }]
            };
            
        default:
            return state;
    }
}

export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
};
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};

export default dialogsReducer;