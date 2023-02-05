import React, { useCallback, useEffect, useState } from 'react'

import person1 from '../../Images/person-2.png';
import person2 from '../../Images/person-3.png';
import search from '../../Images/search-normal1.png';
import more from '../../Images/more.svg';
import moreR from '../../Images/more-rotate.png';
import chat from '../../Images/chat-image1.png';
import document from '../../Images/document-text.png';
import voice1 from '../../Images/voice1.png';
import voice2 from '../../Images/voice2.png';
import microphone from '../../Images/microphone.png';
import image from '../../Images/image.png';

function Conversation() {

  const [showPlus, getShowPlus] = useState(false);

  const [showFrame1, getShowFrame1] = useState(false);

  const [showFrame2, getShowFrame2] = useState(false);


  const addClassFile = showPlus ? "file" : "";
  const addClassFilm = showPlus ? "film" : "";
  const addClassImg = showPlus ? "picture" : "";


  return (
    <div className='conversation box'>

      <div className='info flex-between'>
        <div className='flex'>
          <img src={person1} alt="" />
          <p>
            <span>ahmed mohammed</span>
            <span>Last Online 5 Hours Ago</span>
          </p>
        </div>
        <div className='flex'>
          <img src={search} alt="" />
          <div onClick={() => getShowFrame1(!showFrame1)}>
            <img src={more} alt="" />
            <div className={`options ${showFrame1 && "showProfile"}`}>
              <span><span className='s1'>End Chat</span></span>
              <span><span className='s2'>Forward To</span></span>
              <span><span className='s3'>Add Participants</span></span>
              <span><span className='s4'>Block</span></span>
            </div>
          </div>
        </div>
      </div>

      <div className='chat-msg'>

        <div className='left'>
          <div className='photo'><img src={person1} alt="" /></div>
          <div className='container'>
            <div className='flex social-design'>
              <img src={person2} alt="" />
              <div>
                <span>Socail Media Design</span>
                <span>50 $</span>
              </div>
            </div>
            <div className='paragraph'>
              <p className='time'>
                Hello! Finally found the time to write to you I need your help in creating interactive animations for my mobile application.
              </p>
              <img src={moreR} alt='moreR' />
            </div>
            <div className='paragraph'>
              <p className='time'>
                Can I Send The Files ?
              </p>
              <img src={moreR} alt='moreR' />
            </div>
          </div>
        </div>

        <div className='right'>
          <div className='container'>
            <div className='paragraph'>
              <img src={moreR} alt='moreR' />
              <p className='time'>Ok , Waiting</p>
            </div>
          </div>
        </div>

        <div className='left'>
          <div className='photo'><img src={person1} alt="" /></div>
          <div className='container'>
            <div>
              <div className='file time'>
                <img src={document} alt="" />
                <span>
                  Design File.rar <br /> <span className='size'>5 Mb</span>
                </span>
                <i className="fa-solid fa-arrow-down arrow-down"></i>
              </div>
              <img src={moreR} alt="moreR" />
            </div>
          </div>
        </div>

        <div className='right'>
          <div className='container'>
            <div className='image'>
              <img src={moreR} alt='moreR' />
              <i className="fa-solid fa-arrow-down arrow-down"></i>
              <img src={chat} alt='' />
            </div>
          </div>
        </div>

        <p className='coupon'>
          Discount Coupon Has Been Activated From The Merchant
        </p>

        <div className='left'>
          <div className='photo'><img src={person1} alt="" /></div>
          <div className='container'>
            <div>
              <div className='voice time'>
                <i className="fa-regular fa-circle-play play"></i>
                <img src={voice1} alt="" />
                <span>1:25</span>
              </div>
              <img src={moreR} alt="moreR" />
            </div>
            <div>
              <div className='voice time'>
                <i className="fa-regular fa-circle-pause pause"></i>
                <img src={voice2} alt="" />
                <span>1:25</span>
              </div>
              <img src={moreR} alt="moreR" />
            </div>
          </div>
        </div>

      </div>

      <div className='send-msg'>
        <form className='flex-between'>
          <div className='your-msg flex'>
            <div className='icons-plus' onClick={() => getShowPlus(!showPlus)}>
              <i className="fa-solid fa-plus"></i>
              <i className={`fa-regular fa-file ${addClassFile}`}></i>
              <img src={image} alt={addClassImg} />
              <i className={`fa-solid fa-film ${addClassFilm}`}></i>
            </div>
            <input type="text" placeholder='Type Your Message Here + Enter' />
          </div>
          <div className='icons flex'>
            <i className="fa-regular fa-face-smile smile"></i>
            <img src={microphone} alt='' />
            <button
              name="send-message"
              value=""
            >
              <i className="fa-solid fa-paper-plane paper"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Conversation
