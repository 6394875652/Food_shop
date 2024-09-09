import React from 'react'
import './Footer.css'
 import footer_logo from './logon.png'
// import instagram_icon from '../Assets/instagram_icon.png'
// import pintester_icon from '../Assets/pintester_icon.png'
// import whatsapp_icon from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=''/>
            <p>My Resturant</p>

        </div>
        <ul className='footer-links'>
           <li>Company</li>
           <li>Products</li>
           <li>Offices</li>
           <li>About</li>
           <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
           <div className='footer-icons-container'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtAb9U5_tAjwahmghHkdrXnBOCzkyZ6suzZg&s" alt=''/>
           </div>
           <div className='footer-icons-container'>
              <img src="https://cdn-icons-png.flaticon.com/512/2496/2496110.png" alt=''/>
           </div>
           <div className='footer-icons-container'>
            <img src="https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338507_1280.png" alt=''/>
           </div>

        </div>
        <div className='footer-copyright'>
           <hr/>
           <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}
