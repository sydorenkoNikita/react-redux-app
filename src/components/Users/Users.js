import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from "../../assets/Icon-User.png";
import classes from './Users.module.css';




const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div className={classes.pagination}>
            {pages.map((p) => {
                return <span className={props.currentPage === p && classes.active}
                    onClick={() => {
                        props.onChangePage(p)
                    }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id} className={classes.usersTable} >
                <div className={classes.containerUser}>
                    <div className={classes.userAva}>
                    
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                            className={classes.userPhoto} />
                    </div>
                    <div className={classes.userInfo}>
                     
                        <div className={classes.userName}>
                        <NavLink to={'/profile/' + u.id}>
                            {u.name} 
                            </NavLink>
                            </div>
                        <div className={classes.btnBlock}>
                        {u.followed
                            ? <button disabled={props.followingIsProgress.some(id => id === u.id)}
                                onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button disabled={props.followingIsProgress
                                .some(id => id === u.id)}
                                onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                    </div>
                    
                </div>

            </div>
            )
        }
    </div>
}

export default Users;