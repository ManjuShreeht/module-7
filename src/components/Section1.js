import React from 'react'
import '../components/section1.css'
import girl from '../components/girl.png'

function Section1() {
  return (
    <div className='section1'>
      <div className='section'>
     <div className='left'>
      <h5>SUMMER 2020</h5>
      <h1>NEW COLLECTION</h1>
      <h4>We know how large objects will act, <br></br>
but things on a small scale.</h4>
<button type="button">SHOP NOW</button>
     </div>

     <div className='right'>
      <div className='circle'></div>

    
      
     <div className='bigcircle'>
      <img src={girl} alt="miss" />
      </div>

      </div>
     </div>
      </div>
      
   
  )
}

export default Section1
