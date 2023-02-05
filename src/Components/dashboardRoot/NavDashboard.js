import React, { useEffect, useState } from 'react'

import personImg from '../../Images/personal-img.png';
import vector from '../../Images/Vector.png';
import chat from '../../Images/chat.png';
import bell from '../../Images/bell.png';
import moon from '../../Images/moon.png';
import sun from '../../Images/sun.png';
import { NavLink } from 'react-router-dom';

function NavDashboard() {

  const [showLang, getShowLang] = useState(false);
  const [profile, getProfile] = useState(false);
  const [lang, getLang] = useState("En");
  const [theme, getTheme] = useState(true);

  const showLangList = () => {
    getShowLang(!showLang);
  }

  const showProfile = () => {
    getProfile(!profile);
  }

  const changeLang1 = () => {
    getLang("En");
  }
  const changeLang2 = () => {
    getLang("Ar");
  }

  const changeTheme = () => {
    getTheme(!theme);
    if (theme) {
      document.documentElement.style.setProperty('--dark-blue-color', '#fafafa');
      document.documentElement.style.setProperty('--dark-chat-color', '#122139');
      document.documentElement.style.setProperty('--first-blue-color', '#efefef');
      document.documentElement.style.setProperty('--first-blue-alt-color', '#cdcdcd');
      document.documentElement.style.setProperty('--white-color', '#040d21');
      document.documentElement.style.setProperty('--shadow-color', 'rgb(0 0 0 / 20%)');
      document.documentElement.style.setProperty('--bluelight-color', '#546e93');
      document.documentElement.style.setProperty('--middle-blue-color', '#fff');
    } else {
      document.documentElement.style.setProperty('--dark-blue-color', '#040d21');
      document.documentElement.style.setProperty('--dark-chat-color', '#122139');
      document.documentElement.style.setProperty('--first-blue-color', '#16263f');
      document.documentElement.style.setProperty('--first-blue-alt-color', '#0D1A2F');
      document.documentElement.style.setProperty('--white-color', '#fafafa');
      document.documentElement.style.setProperty('--shadow-color', 'rgb(58 194 203 / 30%)');
      document.documentElement.style.setProperty('--bluelight-color', '#a4b4cb');
      document.documentElement.style.setProperty('--middle-blue-color', '#36415C');
    }
  }

  const numMsg = 3;
  const munNot = 3;

  useEffect(() => {
    document.querySelector(".dashboard").onclick = () => {
      getProfile(false);
      getShowLang(false);
    }
  }, [])

  return (
    <div className='nav-dashboard flex-between'>
      <p>Welcome To Kwaidi Sellers Dashboard</p>
      <div className='settings flex'>
        <div className='account flex'>
          <img src={personImg} alt='person-img' />
          <div>
            <span className='flex-between profile' onClick={showProfile}>
              Hi Dima
              <img src={vector} alt="vactor" />
            </span>

            <div className={`profile-settings ${profile && "showProfile"}`}>
              <NavLink to="profile-settings" >Profile Settings</NavLink>
              <form>
                <input type="submit" value="Log Out" />
              </form>
            </div>

            <p>Good Morning!</p>
          </div>
        </div>
        <div className='features flex'>
          <span className='langs flex-between' onClick={showLangList}>
            <span>{lang}</span>
            <img src={vector} alt="vactor" />
            {
              showLang &&
              <form className='rad-5'>
                <button onClick={changeLang1}>En</button>
                <button onClick={changeLang2}>Ar</button>
              </form>
            }
          </span>


          <span className='chat'>
            <NavLink to="chat" data-info={numMsg}><img src={chat} alt='' /></NavLink>
          </span>


          <span className='bell'>
            <NavLink to="/" data-info={munNot}><img src={bell} alt='' /></NavLink>
          </span>


          <span className='moon' onClick={changeTheme}>
            <span>
              {
                theme ? <img src={moon} alt='' /> :
                  <img src={sun} alt='' />
              }
            </span>
          </span>


        </div>
      </div>
    </div>
  )
}

export default NavDashboard
