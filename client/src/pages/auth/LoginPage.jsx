import React from 'react'

import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import './style.css'
import { SIGNUP_ROUTE } from '../../utils/consts'
import { useNavigate } from 'react-router-dom'
export default function LoginPage() {
  const navigator = useNavigate();
  return (
    <div className='container'>
      <div className="signup-form">
        <div className="red-half">
          <h2>Вы ещё не с нами?</h2>
          <p>Создайте аккаунт чтобы получать уведомления об изменении цен и синхронизировать ваши товары на всех устройствах.</p>
          <Button onClick={() => navigator(SIGNUP_ROUTE)} white text='Зарегистрироваться'/>
        </div>
        <div className="gray-half">
          <h2>Вход в аккаунт Behoof</h2>
          
          <div className="gap-form">
            <Input title='Электронная почта' type='email'/>
            <Input title='Пароль' type='password'/>
            <div className="login-footer">
              <Button  text='Войти'/>
              <p>Восстановить пароль</p>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}
