import React from 'react'

import emp from '../../../Images/person-1.png';

function Employees() {

  const employeesList = [
    {
      id: 1,
      name: "Ahmed Mohammed",
      branch: "Riyadh Branch",
      img: emp,
    },
    {
      id: 2,
      name: "Ahmed Mohammed",
      branch: "Riyadh Branch",
      img: emp,
    },
    {
      id: 3,
      name: "Ahmed Mohammed",
      branch: "Riyadh Branch",
      img: emp,
    },
    {
      id: 4,
      name: "Ahmed Mohammed",
      branch: "Riyadh Branch",
      img: emp,
    },
    {
      id: 5,
      name: "Ahmed Mohammed",
      branch: "Riyadh Branch",
      img: emp,
    },
  ]

  const resultEmployees = employeesList.map((employee) => {
    return <li key={employee.id} className="flex">
      <img src={employee.img} alt='' />
      <div className='name'>
        {employee.name}
        <span>{employee.branch}</span>
      </div>
    </li>
  })

  return (
    <div className='employees person custom-box'>
      <h2>Highest performing Employees</h2>
      <ul>{resultEmployees}</ul>
    </div>
  )
}

export default Employees
