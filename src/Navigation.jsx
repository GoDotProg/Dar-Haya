import React from 'react'
import './NavigationCSS.css'
import './index.css'
import logo from './assets/logo.png'

const Navigation = () => {
  return (
    <div className="container" >
      <div className='image-container'>
        <img src={logo} alt='logo'></img>
        <a>دار هيا للتجاره | Dar haya trading</a>
      </div>
      <ul className='box'>
        <li><a href='#main' className='ar'>الرئيسيه</a></li>
        <li><a href='#about' className='ar'>عن دار هيا</a></li>
        <li><a href='#product' className='ar'>منتجاتنا</a></li>
        <li><a href='#contact' className='ar'>تواصل معنا</a></li>
      </ul>
    </div>
  )
}

export default Navigation