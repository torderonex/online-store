import React from 'react'
import logo from '../../assets/logo.svg';
import code from '../../assets/qrcode.jfif'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { CATEGORY_ROUTE } from '../../utils/consts';

export default function Footer() {

  const navigator = useNavigate();

  return (
    <footer>
        <div className="container">
          <div className="logo">
            <img src={logo}/>
            <img className='qrcode' src={code}/>
          </div>
          <div className="footer-lists">
            <ul className="to-user footer-list">
              <li>Пользователю</li>
              <li>Связаться с нами</li>
              <li>FAQ & Руководства</li>
              <li>Политика конфиденцианльности</li>
              <li>Пользовательское соглашение</li>
            </ul>
            <ul className="popular footer-list">
              <li>Популярные категории</li>
              <li onClick={() => navigator(CATEGORY_ROUTE + '1',{preventScrollReset:true})}>Смартфоны</li>
              <li>Ноутбуки</li>
              <li>Планшеты</li>
              <li>Умные часы</li>
              <li>Наушники</li>
            </ul>
            <ul className="about-team footer-list">
              <li>Наша команда</li>
              <li>О нас</li>
              <li>Работа у нас</li>
            </ul>
          </div>
        </div>
    </footer>
  )
}
