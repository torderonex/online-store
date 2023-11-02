import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import "./style.css"
import {Link} from 'react-router-dom';
class PhoneHeader extends React.Component {
  
    showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
         <img src="logo.svg" alt="Behoof" />
         <Link className='bm-item' to={"/"}>Избранное</Link>
         <Link className='bm-item' to={"/"}>Корзина</Link>
         <Link className='bm-item' to={"/"}>Профиль</Link>

      </Menu>
    );
  }
}

export default PhoneHeader;