import React, {useContext, useState} from 'react'
import './style.css'
import InputSearch from '../input-search/InputSearch';
import Dropdown from '../dropdown/Dropdown';
import IconButton from '../ico-btn/IconButton';
import {useNavigate} from 'react-router-dom'
import logo from '../../assets/logo.svg';
import heart from '../../assets/heart.svg';
import glasses from '../../assets/glasses.svg';
import chart from '../../assets/chart.svg';
import user from '../../assets/user.svg';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

 function Header({isDropdownOpen, setIsDropdownOpen}) {
    const navigator = useNavigate();
    const {store} = useContext(Context);
    return (
    <div className="container">
         <header>
            <div className="logo_info" >
                <img onClick={() => navigator('/')} src={logo}/>
                <p>Лучшие цены<br/> в интернет-магазинах</p>
            </div>
            <div className='search'>
                <Dropdown text="Каталог товаров" isOpen={isDropdownOpen} setIsOpen={setIsDropdownOpen}>
                    <div className="dropdown-menu">
                        <div className="dropdown-list">
                            <h2>Каталог товаров</h2>
                            <ul>
                                <li>Смартфоны</li>
                                <li>Ноутбуки</li>
                                <li>Планшеты</li>
                                <li>Умные часы</li>
                                <li>Игровые приставки</li>
                                <li>Наушники</li>
                                <li>Портативные колонки</li>
                            </ul>
                        </div>
                    
                        <div className="dropdown-list">
                            <h2>Смартфоны</h2>
                            <ul>
                                <li>Все смартфоны</li>
                                <li>Новикни смартфоны</li>
                                <li>Недорогие смартфоны</li>
                                <li>Apple</li>
                                <li>Samsung</li>
                                <li>Honor</li>
                                <li>Xiaomi</li>
                            </ul>
                        </div>
                            
                        <div className="dropdown-list">
                            <h2>Apple</h2>
                            <ul>
                                <li>Все смартфоны Apple</li>
                                <li>iPhone 14 Pro Max</li>
                                <li>iPhone 14 Pro</li>
                                <li>iPhone 14 Plus</li>
                                <li>iPhone 14</li>
                                <li>iPhone 13 Pro Max</li>
                                <li>iPhone 13 Pro</li>
                                <li>iPhone 13</li>
                                <li>iPhone 13 mini</li>
                                <li>iPhone 12</li>
                                <li>iPhone 11</li>
                            </ul>
                        </div>
                   
                    </div>
                    
                </Dropdown>
                <InputSearch placeholder={'Поиск товаров'}/>
            </div>
            <div className='ico-btns'>
                <IconButton className='ico-btns-item' iconPath={heart}/>
                <IconButton onClick={() => {store.setIsBlind(!store.isBlind)}} className='ico-btns-item glasses' iconPath={!store.isBlind ? glasses : null}/>
                <IconButton className='ico-btns-item glasses' iconPath={chart}/>
                <IconButton onClick={() => navigator('/signup')} className='ico-btns-item' iconPath={user}/>
            </div>
        </header>  
    </div>
    
    );
}
export default observer(Header)