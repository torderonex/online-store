import React, {useEffect} from 'react'
import './style.css'

export default function Dropdown({text, isOpen, setIsOpen, children}) {
  
  const toggleDropdown = () => {
    if (isOpen){
      const menuElement = document.querySelector('.menu');
      menuElement.classList.add('closing');

      setTimeout(() => {
        menuElement.classList.remove('closing');
        setIsOpen(!isOpen);
      }, 500);
      return 
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
    <button onClick={toggleDropdown} className='dropdown'>{text} <img src='arrow-down.svg' className={isOpen ? 'rotate' : ''}/></button>
        
    <div className={['menu', isOpen ? 'open' : ''].join(' ')} >
      <div className="container">
        {children}
      </div>
    </div>
    
    <div className={isOpen ? 'overlay' : ''}></div>
    </>
  )
}
