
import { addPostActionCreator, btnShowActionCreator, showElemActionCreator, updateNewPostActionCreator } from '../../redux/profile-reducer';

import MyPosts from './MyPosts';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    shouldShowElem: state.profilePage.shouldShowElem,
    btnShow: state.profilePage.btnShow
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostActionCreator(text);
      dispatch(action)
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    showElem: () => {
      dispatch(showElemActionCreator())
    },
    showBtn: () => {
      dispatch(btnShowActionCreator())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)

