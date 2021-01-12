import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import logo from '../../assets/app.co.png'

const Header = (props) => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<img src={logo} />
			</div>
			<div className={classes.loginBlock}>
				{props.isAuth ? props.login 
				: <NavLink to={'/login'} className={classes.loginLink}>login</NavLink> }
			</div>

		</header>
		
	)
}

export default Header;