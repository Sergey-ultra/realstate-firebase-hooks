import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={props.path} activeClassName={s.active}>{props.menu} </NavLink>
        </div>
    )

}
const Nav = () => {
    return (
        <nav className={s.nav}>
            <NavBar menu='Profile' path='/profile'/>
            <NavBar menu='Messages' path='/dialogs'/>
            <NavBar menu='News' path='/news'/>
            <NavBar menu='Music' path='/music'/>
            <NavBar menu='Settings' path='/settings'/>
        </nav>
    )
}

export default Nav;