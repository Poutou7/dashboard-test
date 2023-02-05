import React, { useState } from 'react'
import Message from './Message';

import vector from '../../Images/Vector.png';
import search from '../../Images/search-normal.png';
import person from '../../Images/person-2.png';


function ChatOption() {

  const [showOption, getShowOption] = useState(false);
  const [chats, getChats] = useState("All Chats");


  const messages = [
    {
      id: 1,
      name: "ahmed mohammed",
      img: person,
      date: "8 Min Ago",
      effect: "",
      msg: "Lorem ipsum dolor sit amet, consectetur",
      time: "",
      numberMsg: "2",
    },
    {
      id: 2,
      name: "ahmed mohammed",
      img: person,
      date: "8 Min Ago",
      effect: "type",
      msg: "Lorem ipsum dolor sit amet, consectetur",
      time: "",
      numberMsg: "2",
    },
    {
      id: 3,
      name: "ahmed mohammed",
      img: person,
      date: "8 Min Ago",
      effect: "record",
      msg: "",
      time: "01:15",
      numberMsg: "2",
    },
    {
      id: 4,
      name: "ahmed mohammed",
      img: person,
      date: "8 Min Ago",
      effect: "",
      msg: "Lorem ipsum dolor sit amet, consectetur",
      time: "",
      numberMsg: "2",
    },
    {
      id: 5,
      name: "ahmed mohammed",
      img: person,
      date: "8 Min Ago",
      effect: "record",
      msg: "",
      time: "01:15",
      numberMsg: "2",
    },
    {
      id: 6,
      name: "ahmed mohammed",
      img: person,
      date: "8 Min Ago",
      effect: "",
      msg: "Lorem ipsum dolor sit amet, consectetur",
      time: "",
      numberMsg: "2",
    },
    {
      id: 7,
      name: "ahmed mohammed",
      img: person,
      date: "8 Min Ago",
      effect: "",
      msg: "Lorem ipsum dolor sit amet, consectetur",
      time: "",
      numberMsg: "2",
    },
    {
      id: 8,
      name: "ahmed mohammed",
      img: person,
      date: "8 Min Ago",
      effect: "type",
      msg: "Lorem ipsum dolor sit amet, consectetur",
      time: "",
      numberMsg: "2",
    },
    {
      id: 9,
      name: "ahmed mohammed",
      img: person,
      date: "8 Min Ago",
      effect: "record",
      msg: "",
      time: "01:15",
      numberMsg: "2",
    },
    {
      id: 10,
      name: "ahmed mohammed",
      img: person,
      date: "8 Min Ago",
      effect: "",
      msg: "Lorem ipsum dolor sit amet, consectetur",
      time: "",
      numberMsg: "2",
    },
    {
      id: 11,
      name: "ahmed mohammed",
      img: person,
      date: "8 Min Ago",
      effect: "record",
      msg: "",
      time: "01:15",
      numberMsg: "2",
    },
    {
      id: 12,
      name: "ahmed mohammed",
      img: person,
      date: "8 Min Ago",
      effect: "",
      msg: "Lorem ipsum dolor sit amet, consectetur",
      time: "",
      numberMsg: "2",
    },
  ]

  const changeOption = (e) => {
    getChats(e.target.innerHTML);
    getShowOption(false);
  }


  const resultMsg = messages.map((msg) => {
    return <Message
      key={msg.id}
      name={msg.name}
      img={msg.img}
      date={msg.date}
      effect={msg.effect}
      msg={msg.msg}
      time={msg.time}
      numberMsg={msg.numberMsg}
    />
  })

  return (
    <div className='chat-option box'>
      <h2>Chats</h2>
      <div className='search'>
        <form className='select-chats'>
          <div className='custom-select' onClick={() => getShowOption(!showOption)}>
            <span>{chats}</span>
            <img src={vector} alt='vector' />
          </div>
          {
            showOption &&
            <div className='options'>
              <span onClick={changeOption}>All Chats</span>
              <span onClick={changeOption}>Group Chats</span>
              <span onClick={changeOption}>Unread</span>
            </div>
          }
        </form>
        <form className='input-search'>
          <img src={search} alt='search' />
          <input className="custom-select" type="search" placeholder='Search' />
        </form>
      </div>

      <div className='messages'>{resultMsg}</div>
    </div>
  )
}

export default ChatOption
