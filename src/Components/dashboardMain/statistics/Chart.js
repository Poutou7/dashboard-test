import React from 'react'

function Chart() {
  return (
    <div className='chart stat custom-box'>
      <h2>Statistics</h2>
      <div className='flex-between'>
        <div>
          <ul>
            <li className='blue'>Sales</li>
            <li className='red'>Returned</li>
            <li className='orange'>New Clients</li>
          </ul>
          <p>Total Sales : 1000 SR</p>
        </div>
        <div>
          <canvas width='400px' height="250px"></canvas>
        </div>
      </div>
    </div>
  )
}

export default Chart
