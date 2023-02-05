import React from 'react'

import yes from "../../Images/Yes.png";
import no from "../../Images/No.png";
import up from "../../Images/trend-up.png";
import down from "../../Images/trend-down.png";

function BoxInfo({ icon, color, title, content, trend, valTrend }) {
  return (
    <div className='box custom-box'>
      <div className='icon-title flex'>
        <img src={icon} alt='' style={{ backgroundColor: `${color}` }} />
        <span>{title}</span>
      </div>
      <div className='info flex-between'>
        <h1>{content}</h1>
        {
          trend ? <img src={yes} alt='' />
            : <img src={no} alt='' />
        }
      </div>
      <div className='val-trend flex'>
        {
          trend ? <img src={up} alt='' />
            : <img src={down} alt='' />
        }
        <span style={{ color: trend ? "var(--green-color)" : "var(--red-color)" }}>{valTrend}%</span>
      </div>
    </div>
  )
}

export default BoxInfo;
