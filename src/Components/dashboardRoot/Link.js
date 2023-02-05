import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Link({ title, list }) {



  const result = list.map((l, idx) => {

    const href = l.toLowerCase().replace(" ", "-");
    const tit = title.toLowerCase().replace(" ", "-");

    return (
      <li key={idx}>
        <NavLink to={`${tit}/${href}`}>{l}</NavLink>
      </li>
    );
  })

  return (
    <li className='lli'>
      <div className='link-show'>
        <div className='flex-between'>
          <span>{title}</span>
          <i className="fa-solid fa-angle-down"></i>
        </div>
        <ul className="show">{result}</ul>
      </div>
    </li>
  )
}

export default Link
