import React from 'react'

import "./style.css"

export default function Banner({children, size}) {
  return (
    <div className={['banner', size === 'normal' ? 'normal' : '', size === 'small' ? 'small' : ''].join(' ')}>
        {children}
    </div>
  )
}
