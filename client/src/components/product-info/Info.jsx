import React from 'react'

import "./style.css"
export default function Info({characteristics}) {
  return (
    <table className='product_info'>
      <tbody>
        {
          characteristics.map(x => (
            <tr>
              <td>{x.name}</td>
              <td>{x.value}</td>
            </tr>
          ))
        }
      </tbody>
    
  </table>
  )
}
