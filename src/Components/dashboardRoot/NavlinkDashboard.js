import React from 'react'
import { Form, NavLink, useNavigate } from 'react-router-dom';

import Link from './Link';

import logo from '../../Images/logo.png';
import logout from '../../Images/logout.png';
import windows from '../../Images/windows.png';


function NavlinkDashboard() {

  const navigate = useNavigate();

  const links1 = [
    {
      id: 1,
      title: "Roles Management",
      list: ["Employee List", "Role List", "Emploee Log"]
    },
    {
      id: 2,
      title: "Costumer Management",
      list: ["Customer list", "Reviews", "Customer Sticker"]
    }
  ]

  const links2 = [
    {
      id: 1,
      title: "Products Management",
      list: ["Products List", "Products Package", "Trash"]
    },
    {
      id: 2,
      title: "Orders Management",
      list: ["Orders List", "Waybill Genrate"]
    },
    {
      id: 3,
      title: "Marketing Management",
      list: ["Platform Ads", "Pin Ads", "Coupons", "Special Offers", "Affiliate System", "Kwaidi Affiliate", "Cart overtime", "Available Stock", "SMS Services", "Costumer Points", "live streaming"]
    },
    {
      id: 4,
      title: "Store Theme",
      list: ["Store Design", "My APP"]
    },
    {
      id: 5,
      title: "Accounting & Reports ",
      list: ["Invoice", "Purchase", "Supplier Bills", "Affiliate Bills", "Bills Reports"]
    },
    {
      id: 6,
      title: "System Setting",
      list: ["Basic Setting", "Store Plan", "Seo Setting", "Brands Setting", "Orders Setting", "Footer Custom", "Store Options", "Domain Setting"]
    },
    {
      id: 7,
      title: "App Market",
      list: ["App market", "Installed apps"]
    },
  ]

  const result1 = links1.map((l) => {
    return <Link key={l.id} title={l.title} list={l.list} />
  })

  const result2 = links2.map((l) => {
    return <Link key={l.id} title={l.title} list={l.list} />
  })

  const windowPos = () => {
    navigate("windows-pos")
  }




  return (
    <div className="navlink-dashboard">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="branch-management" >
              Branch Management
            </NavLink>
          </li>
          {result1}
          <li>
            <NavLink to="supplier-management">
              Supplier Management
            </NavLink>
          </li>
          {result2}
          <li>
            <NavLink to="video-center">
              Video Center
            </NavLink>
          </li>

          <li>
            <NavLink to="hiring-team">
              Hiring Team
            </NavLink>
          </li>

          <li>
            <NavLink to="kwaidi-store">
              Kwaidi Store
            </NavLink>
          </li>

          <li>
            <NavLink to="get-gift">
              Get a Gift
            </NavLink>
          </li>

          <li>
            <NavLink to="cashier">
              cashier
            </NavLink>
          </li>

          <li className='logout'>
            <Form>
              <span>Log Out</span>
              <button>
                <img src={logout} alt="logout" />
              </button>
            </Form>
          </li>
        </ul>
      </nav>
      <div className='pos flex pad-25' onClick={windowPos}>
        <img src={windows} alt='' />
        <p>Kwaidi POS</p>
      </div>
    </div>
  );
}

export default NavlinkDashboard
