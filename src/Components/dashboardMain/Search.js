import React, { useState } from 'react'

import search from '../../Images/search-normal.png';
import vector from '../../Images/Vector.png';

function Search() {

  const [showOption, getShowOption] = useState(false);
  const [chats, getChats] = useState("18.sep.2022");

  const changeOption = (e) => {
    getChats(e.target.innerHTML);
    getShowOption(false);
  }

  return (
    <div className='search flex'>
      <form>
        <div className='input-search rad-10'>
          <img src={search} alt='search' />
          <input className="pad-20" type="search" />
          <select className="pad-20" name="Branch">
            <option value="Branch1">Branch1</option>
            <option value="Branch2">Branch2</option>
            <option value="Branch3">Branch3</option>
          </select>
          <img src={vector} alt='vector' />
        </div>
        <input className="pad-20 rad-10" type="submit" value="Search" />
      </form>
      <div className='date-select'>
        {/* <img src={vector} alt='vector' /> */}
        {/* <select className="rad-10" name="Date">
          <option value="Branch1">18.Sep.2022</option>
          <option value="Branch1">18.Sep.2022</option>
          <option value="Branch1">18.Sep.2022</option>
        </select> */}
        <div className='custom-select' onClick={() => getShowOption(!showOption)}>
          <span>{chats}</span>
          <img src={vector} alt='vector' />
        </div>
        {
          showOption &&
          <div className='options'>
            <span onClick={changeOption}>18.sep.2022</span>
            <span onClick={changeOption}>20.sep.2022</span>
            <span onClick={changeOption}>27.sep.2022</span>
          </div>
        }
      </div>
    </div>
  )
}

export default Search
