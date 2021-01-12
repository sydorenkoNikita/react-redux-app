import React from 'react'
import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css'



const Navbar = (props) => {
	
	return (
		<nav className={classes.nav}>
			<div className={classes.item}>
				<NavLink to="/profile" activeClassName={classes.activeLink} > Profile </NavLink>
			</div>
			<div className={`${classes.item} ${classes.active}`}>
				<NavLink to="/dialogs" activeClassName={classes.activeLink} > Messages </NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to="/news" activeClassName={classes.activeLink} > News </NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to="/users" activeClassName={classes.activeLink} > Users </NavLink>
			</div>
			<div className={classes.item}>
				<a> Settings </a>
			</div>
			<div className={classes.item}>
				
			</div>
		</nav>
	)
}

export default Navbar; 