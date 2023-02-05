import React from 'react'

import typing from '../../Images/typing.png';
import record from '../../Images/record.png';
import microphone from '../../Images/microphone.png';

function Message({ name, img, date, effect, msg, time, numberMsg }) {
  return (
    <div className='message pad-25'>
      <span>{date}</span>
      <div className='name'>
        <img src={img} alt='' />
        <div>
          <span>{name}</span>
          <div>
            {
              effect === "type" ?
                <>
                  <img src={typing} alt='' />
                  <span>Typing</span>
                </>
                : effect === "record" ?
                  <>
                    <img src={record} alt='' />
                    <span>records voice message</span>
                  </>
                  : ""
            }
          </div>
        </div>
      </div>
      <div className='msg bullet flex' data-num={numberMsg}>
        {
          effect === "type" ?
            <p data-msg={numberMsg} className="effect" >{msg}</p>
            : effect === "" ?
              <p data-msg={numberMsg} className="no-effect" >{msg}</p>
              :
              <>
                <img src={microphone} alt="" />
                <p className="effect" >Voice Message ({time})</p>
              </>
        }
      </div>
    </div>
  )
}

export default Message
