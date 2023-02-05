import React, { useEffect } from 'react'

import person from '../../Images/person-2.png'
import chat1 from '../../Images/chat-image2.png'
import chat2 from '../../Images/chat-image3.png'
import chat3 from '../../Images/chat-image4.png'
import chat5 from '../../Images/chat-image5.png'
import more from '../../Images/more.svg'



function AllChats() {


  useEffect(() => {

    let elements = document.querySelectorAll(".shared-media span");

    elements.forEach((ele) => {
      ele.addEventListener("click", e => {
        elements.forEach((b) => { b.classList.remove("active") });
        ele.classList.add("active");
      })
    });
  })

  return (
    <div className='all-chats box'>
      <div className='info pad-20'>
        <div className='name flex'>
          <img src={person} alt='' />
          <h2 className='bold'>Ahmed Mohammed</h2>
        </div>
        <section>
          <p>
            Email<span>ahmed@gmail.com</span>
          </p>
          <p>
            Phone Number<span>+966595111957</span>
          </p>
        </section>
        <div className='strip'>
          <span>Kwaidi</span>
        </div>
      </div>

      <section className='notification'>
        <div className='flex'>
          <i className="fa-solid fa-bell"></i>
          <span className='bold'>Notification</span>
        </div>
        <input type="checkbox" className='custom-input' defaultChecked />
      </section>

      <section className='media border-bottom'>
        <div className='flex title'>
          <i className="fa-solid fa-chevron-right chevron"></i>
          <h3 className='bold'>Shared Media</h3>
        </div>
        <div>
          <div className='strip shared-media'>
            <span className='active'>Photos</span>
            <span>Videos</span>
            <span>Files</span>
            <span>Links</span>
          </div>
          <div className='photos pad-20'>
            <div className='flex-between'>
              <img src={chat1} alt='' />
              <img src={chat2} alt='' />
              <img src={chat3} alt='' />
              <img src={chat1} alt='' />
              <img src={chat2} alt='' />
              <img src={chat3} alt='' />
            </div>
          </div>
        </div>
      </section>

      <section className='orders border-bottom'>
        <div className='flex title'>
          <i className="fa-solid fa-chevron-right chevron"></i>
          <h3 className='bold'>Orders (1)</h3>
        </div>
        <div className='flex'>
          <img src={chat5} alt="" />
          <span className='bold'>Women Perfuem</span>
          <span className='completed'>Completed</span>
        </div>
        <span>Order Details</span>
      </section>

      <section className='messages border-bottom'>
        <div className='flex title'>
          <i className="fa-solid fa-chevron-right chevron"></i>
          <h3 className='bold'>starred messages (1)  </h3>
        </div>
        <div className='flex-between'>
          <a href="https://www.figma.com/proto/UMbcUigr9dNeoBZGxcwTxL/Untitled?page-id=0%3A1&node-id=112%3A164&viewport=-124%2C335%2C0.69&scaling=scale-down" target="_blank" rel="noreferrer" >
            https://www.figma.com/proto/UMbcUigr9dNeoBZGxcwTxL/Untitled?page-id=0%3A1&node-id=112%3A164&viewport=-124%2C335%2C0.69&scaling=scale-down
          </a>
          <img src={more} alt="more" />
        </div>
      </section>

      <section className='notes'>
        <button className='bold'>Add</button>
        <div className='flex title'>
          <i className="fa-solid fa-chevron-right chevron"></i>
          <h3 className='bold'>Orders (1)</h3>
        </div>
        <div className='flex-between'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend.</p>
          <img src={more} alt="more" />
        </div>
      </section>
    </div>
  )
}

export default AllChats
