import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Menu.css'
import dhosa from './images/dhosa.jpg'
import paneer from './images/chillipaneer.jpg'
import chhola from './images/chhola.jpg'
import burger from './images/buger.jpg'
import manchur from './images/manchurian.jpg'
import pizza from './images/pizza.jpg'


export const Menu = () => {
  return (
    <>
       <div className='men'>
       <h2>Menu List</h2>
       <div className='container'>
        <div className='cards'>
          <img src={dhosa} alt=''/>
          <h3>Dhosa</h3>
          <p>dssfhdg87 syfywuyfg sdfsuygf sdjfndsiuf hsdbfuyd hsdbf sdbfbd bsf hsdbfu sdudhf </p>
          <div className='foot'>
            <button>Buy Now</button>
            <h4>RS 100</h4>
          </div>
          
          </div>
          

          <div className='cards'>
          <img src={chhola} alt=''/>
          <h3>Chhola</h3>
          <p>dssfhdg87 syfywuyfg sdfsuygf sdjfndsiuf hsdbfuyd hsdbf sdbfbd bsf hsdbfu sdudhf </p>
          <div className='foot'>
            <button>Buy Now</button>
            <h4>RS 110</h4>
          </div>
          </div>

          <div className='cards'>
          <img src={manchur} alt=''/>
          <h3>Dhosa</h3>
          <p>dssfhdg87 syfywuyfg sdfsuygf sdjfndsiuf hsdbfuyd hsdbf sdbfbd bsf hsdbfu sdudhf </p>
          <div className='foot'>
            <button>Buy Now</button>
            <h4>RS 106</h4>
          </div>
          </div>
 
          <div className='cards'>
          <img src={burger} alt=''/>
          <h3>Burger</h3>
          <p>dssfhdg87 syfywuyfg sdfsuygf sdjfndsiuf hsdbfuyd hsdbf sdbfbd bsf hsdbfu sdudhf </p>
          <div className='foot'>
            <button>Buy Now</button>
            <h4>RS 109</h4>
          </div>
          </div>

          <div className='cards'>
          <img src={paneer} alt=''/>
          <h3>Paneer</h3>
          <p>dssfhdg87 syfywuyfg sdfsuygf sdjfndsiuf hsdbfuyd hsdbf sdbfbd bsf hsdbfu sdudhf </p>
          <div className='foot'>
            <button>Buy Now</button>
            <h4>RS 140</h4>
          </div>
          </div>

          <div className='cards'>
          <img src={pizza} alt=''/>
          <h3>Pizza</h3>
          <p>dssfhdg87 syfywuyfg sdfsuygf sdjfndsiuf hsdbfuyd hsdbf sdbfbd bsf hsdbfu sdudhf </p>
          <div className='foot'>
            <button>Buy Now</button>
            <h4>RS 130</h4>
          </div>
          </div>
          
        
       </div>
      
       </div>
      
    </>
  )
}
