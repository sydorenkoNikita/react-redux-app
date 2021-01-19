import React from 'react'
import classes from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
  
  if (!props.profile) {
    return <div> фото нет</div>
  }
  return (
    <div className={classes.profileInfo}>
        <div className={classes.userPhoto}><img alt='profilePhoto' src={props.profile.photos.large} /></div>
        <h4>{props.profile.fullName}</h4>
        <p className={classes.title}> {props.profile.lookingForAJobDescription} </p>
        <div className={classes.githubLink}>
          <a href="https://github.com/sydorenkoNikita">{props.profile.contacts.github} </a>
        </div>
    
    </div>
  )
}

export default ProfileInfo; 