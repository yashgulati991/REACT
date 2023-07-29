import React from 'react'
import {NavLink} from 'react-router-dom';
const Menu = () => {
    return (<>
      <div className="menu-class">
      <NavLink exact activeClassName="active-class" to='/about'>About </NavLink>
      <NavLink exact activeClassName="active-class" to='/contact'>Contact </NavLink>
      <NavLink exact activeClassName="active-class" to='/search'>Search </NavLink>
      <NavLink exact activeClassName="active-class" to='/services'>Services</NavLink>
      <NavLink exact activeClassName="active-class" to='/user'>User</NavLink>
      </div>
    </>);
};
export default Menu;