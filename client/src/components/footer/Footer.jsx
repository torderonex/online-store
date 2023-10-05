import React from 'react'

import './style.css'

export default function Footer() {
  return (
    <footer>
        <div className="container">
          <div className="logo">
            <img src="logo.svg"/>
            <img className='qrcode' src="qrcode.jfif"/>
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
              <li>Смартфоны</li>
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
