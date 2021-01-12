const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SHOW_ELEM = 'SHOW_ELEM';

let initialState = {
    posts: [
         { id: 1, message: "Hi, how are you?" },
        { id: 2, message: "Hello world" },
       
    ],
    newPostText: 'leave a post',
    profile: null,
    shouldShowElem: false
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: state.newPostText
            };
            return { 
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
        case UPDATE_NEW_POST_TEXT: 
            return { 
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SHOW_ELEM: {
            return {
                ...state, shouldShowElem: true
            }
        }
        default:
            return state;
    }
}


export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export const showElemActionCreator = () => {
    return {
        type: SHOW_ELEM
    }
};

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export default profileReducer;