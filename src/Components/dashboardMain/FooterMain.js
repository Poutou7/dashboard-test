import React from 'react'

import instagram from '../../Images/instargram.png';
import twitter from '../../Images/twitter.png';
import tiktok from '../../Images/tiktok.png';


function FooterMain() {

  return (
    <footer className='grid'>

      <a href="https://www.google.com" target="_blank" rel="noreferrer" className='google-plus custom-box flex'>
        <i className="fa-brands fa-google-plus-g"></i>
        <p>Add Google Analytics Key</p>
      </a>

      <div className='social flex-between'>
        <div>
          <span>Instagram</span>
          <span>Followers</span>
          <div>
            <a href="https://instagram.com/" target="_blanck" >
              <img src={instagram} alt='' />
            </a>
            <span>100K</span>
          </div>
        </div>
        <div>
          <span>Twitter</span>
          <span>Followers</span>
          <div>
            <a href="https://twitter.com/" target="_blanck" >
              <img src={twitter} alt='' />
            </a>
            <span>100K</span>
          </div>
        </div>
        <div>
          <span>Tiktok</span>
          <span>Followers</span>
          <div>
            <a href="https://tiktok.com/" target="_blanck" >
              <img src={tiktok} alt='' />
            </a>
            <span className='connect'>Connect</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterMain
