import React from 'react'

import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE, SIGNUP_ROUTE } from '../../utils/consts'

export default function SignupPage() {
  
  const navigator = useNavigate();
  return (
    <div className='container'>
      <div className="signup-form">
        <div className="red-half">
          <h2>Вы уже с нами?</h2>
          <p>Войдите в аккаунт чтобы получать уведомления об изменении цен и синхронизировать ваши товары на всех устройствах.</p>
          <Button onClick={() => navigator(LOGIN_ROUTE)} white text='Войти'/>
        </div>
        <div className="gray-half">
          <h2>Регистрация в Behoof</h2>
          
          <div className="gap-form">
            <Input title='Электронная почта' type='email'/>
            <Input title='Пароль' type='password'/>
            <div className="login-footer">
              <Button  text='Зарегистироваться'/>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}
