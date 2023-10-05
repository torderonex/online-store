import React from 'react'

import "./style.css"

export default function Banner({children, normal, small}) {
    return (
    <div className={['banner', normal ? 'normal' : '', small ? 'small' : ''].join(' ')}>
        {children}
    </div>
  )
}
