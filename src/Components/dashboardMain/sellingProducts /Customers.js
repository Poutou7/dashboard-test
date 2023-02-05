import React from 'react'

function Customers() {

  const customersList = [
    {
      id: 1,
      name: "Ahmed Mohammed",
      price: 1000,
    },
    {
      id: 2,
      name: "Ahmed Mohammed",
      price: 1000,
    },
    {
      id: 3,
      name: "Ahmed Mohammed",
      price: 1000,
    },
    {
      id: 4,
      name: "Ahmed Mohammed",
      price: 1000,
    },
    {
      id: 5,
      name: "Ahmed Mohammed",
      price: 1000,
    },
  ]

  const resultCustomers = customersList.map((custom) => {
    return <li key={custom.id}>
      {custom.name}
      <span>{custom.price} SR</span>
    </li>
  })

  return (
    <div className='customers person custom-box'>
      <h2>Most Purchased Customers</h2>
      <ol>{resultCustomers}</ol>
    </div>
  )
}

export default Customers;


