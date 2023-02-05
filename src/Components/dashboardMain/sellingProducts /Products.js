import React from 'react'

import prdImg1 from '../../../Images/coffee-1.png';
import prdImg2 from '../../../Images/coffee-2.png';
import chart from '../../../Images/chart.png';
import up from '../../../Images/trend-up.png';

function Products() {

  const productsList = [
    {
      id: 1,
      img: prdImg1,
      title: "Italian Coffee",
      price: 20,
      totalPrice: 1000,
      trend: 50,
      trendSales: 12,
      reviewsStars: 5,
      reviews: 20,
    },
    {
      id: 2,
      img: prdImg2,
      title: "Italian Coffee",
      price: 20,
      totalPrice: 1000,
      trend: 50,
      trendSales: 12,
      reviewsStars: 5,
      reviews: 20,
    },
    {
      id: 3,
      img: prdImg1,
      title: "Italian Coffee",
      price: 20,
      totalPrice: 1000,
      trend: 50,
      trendSales: 12,
      reviewsStars: 5,
      reviews: 20,
    },
    {
      id: 4,
      img: prdImg2,
      title: "Italian Coffee",
      price: 20,
      totalPrice: 1000,
      trend: 50,
      trendSales: 12,
      reviewsStars: 5,
      reviews: 20,
    },
    {
      id: 5,
      img: prdImg1,
      title: "Italian Coffee",
      price: 20,
      totalPrice: 1000,
      trend: 50,
      trendSales: 12,
      reviewsStars: 5,
      reviews: 20,
    },
  ]

  const resultProducts = productsList.map((pr) => {
    return <div key={pr.id} className='product flex-between'>
      <img src={pr.img} alt='' />

      <div>
        <span className='first-span title'>{pr.title}</span>
        <span className='first-span'>{pr.price} SR</span>
      </div>

      <div className='chart'>
        <div>
          <img src={chart} alt='chart' />
          <span className='first-span total-price'>{pr.totalPrice} SR</span>
        </div>
        <span className='last-span'>Total Sales</span>
      </div>

      <div className='trend'>
        <div className='flex'>
          <img src={up} alt='chart' />
          <span className='first-span'>{pr.trend}</span>
        </div>
        <span className='last-span'>Sales ({pr.trendSales}%)</span>
      </div>

      <div className='reviews'>
        <div className='stars'>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <span className='last-span'>{pr.reviews}(Reviews)</span>
      </div>

    </div>
  })

  return (
    <div className='products custom-box'>
      <h2>Best Selling Products</h2>
      {resultProducts}
    </div>
  )
}

export default Products;
