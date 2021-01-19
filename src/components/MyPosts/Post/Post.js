import React from 'react'
import classes from './Post.module.css'



const Post = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.item}>
        <div className={classes.cardBody}>
          <blockquote>
            <img alt='avatar' src='https://skidka02.ru/wp-content/uploads/instagram-avatarka-razmer_31.jpg' />
            {props.message}
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default Post;