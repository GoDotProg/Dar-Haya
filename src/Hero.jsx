import React from 'react'
import './HeroCSS.css'

const Hero = () => {
  return (
    <div className='w-full'>
        <div className='flex-row hero'>
            <div className='sections flex-column'>
                <h1>دار هيا للتجاره</h1>
                <h5>DAR HAYA TRADING</h5>
                <br />
                <p>Lorem ipsum dolor, <br /> sit amet consectetur adipisicing elit. Voluptatum beatae molestiae, <br /> officiis dolorem enim quaerat officia reiciendis alias eius ratione.</p>
            </div>
            <div className='sections flex-column'>
                <h1>Image</h1>
                <p>Lorem ipsum dolor, <br /> sit amet consectetur adipisicing elit. Voluptatum beatae molestiae, <br /> officiis dolorem enim quaerat officia reiciendis alias eius ratione.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero