import React from 'react'

function BoxOrders({ title, color }) {
  return (
    <div className='box-orders custom-box'>
      <span>{title}</span>
      <div style={{ borderColor: `${color}` }}>
        <span>70</span>
      </div>
    </div>
  )
}

export default BoxOrders
