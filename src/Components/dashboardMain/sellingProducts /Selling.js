import React from 'react'
import Products from './Products';
import Customers from './Customers';
import Employees from './Employees';

import "./sellingProducts.css";

function Selling() {
  return (
    <div className="selling-products grid">
      <Products />
      <div className='names'>
        <Customers />
        <Employees />
      </div>
    </div>
  )
}

export default Selling
