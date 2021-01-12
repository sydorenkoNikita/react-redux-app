import React from 'react'

import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let onAddPost = () => {
   /* let textarea = document.createElement('textarea');
    textarea.setAttribute(onchange={onChacgeText});
    document.body.append(textarea);*/
    props.addPost();
  }
  
  //console.log(shouldShowElem = true)
  let visible = () => {
    props.showElem()
    
  }
  
  let onChacgeText = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);

  }
  // if(!props.posts.length){
  //   return  <span>Постов нет</span>
  // }
  let postsElement = props.posts.map(el => <Post message={el.message} />)


  return (

    <div className={classes.postsBlock}>
       {props.shouldShowElem &&<div className={classes.textBlock}>
      { <textarea className={classes.formControl} ref={newPostElement} value={props.newPostText} onChange={onChacgeText}></textarea> }
      <button onClick={onAddPost} className={classes.fatwitter}>Post</button>
      
    </div> }
      <button className={classes.visible} onClick={visible}>leave a comment</button>
      <div className={classes.posts}>
      
        {postsElement}
      </div>
      
    </div>
  )
}

export default MyPosts;