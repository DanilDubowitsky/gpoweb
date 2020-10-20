import React from "react";
import './navbar.css'
import {NavLink} from "react-router-dom";
export const NavBar = ()=>{
    return(
        <div className={'cont-nav'}>
            <img src={require('../images/tusur-logo.png')}/>
            <nav className={'Nav-bar'}>
                <NavLink activeClassName={'active'} className={'link-nav'} to={'/courses'}>Курсы</NavLink>
                <NavLink activeClassName={'active'} className={'link-nav'} to={'/grade'}>Оценки</NavLink>
                <NavLink activeClassName={'active'} className={'link-nav'} to={'/personal-area'}>Личный кабинет</NavLink>
                <NavLink activeClassName={'active'} className={'link-nav'} to={'/settings'}>Настройки</NavLink>
            </nav>
        </div>
    )
}
