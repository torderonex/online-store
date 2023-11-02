import React, {useState} from 'react'
import './style.css'

import InputSearch from '../input-search/InputSearch';
import Dropdown from '../dropdown/Dropdown';
import IconButton from '../ico-btn/IconButton';
import {useNavigate} from 'react-router-dom'

export default function Header({isDropdownOpen, setIsDropdownOpen}) {
    const navigator = useNavigate();

    return (
    <div className="container">
         <header>
            <div className="logo_info" >
                <img onClick={() => navigator('/')} src="logo.svg"/>
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
                <IconButton className='ico-btns-item' iconPath={'heart.svg'}/>
                <IconButton className='ico-btns-item glasses' iconPath={'glasses.svg'}/>
                <IconButton className='ico-btns-item glasses' iconPath={'chart.svg'}/>
                <IconButton onClick={() => navigator('/signup')} className='ico-btns-item' iconPath={'user.svg'}/>
            </div>
        </header>  
    </div>
    
    );
}
