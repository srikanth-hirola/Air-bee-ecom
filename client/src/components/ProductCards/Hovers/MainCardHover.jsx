import { faCartShopping, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import FillHeart from '../../wishlist/FillHeart'
import { Link } from 'react-router-dom'
const MainCardHover = ({ addToCart, id, data }) => {
  const [click, setClick] = useState(false)

  return (
    <div className='DronesRecommendedItems-content-hover-images inset-0  bg-black opacity-70 !absolute group-hover:flex group-hover:justify-center'>
      <div className='flex h-full items-center space-x-3'>
        <div className='DronesRecommendedItems-content-hover-images-1 cursor-pointer' onClick={(e) => addToCart({ e, id })}>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div className='DronesRecommendedItems-content-hover-images-1'>
          <Link to="/products?search=all products">
          <FontAwesomeIcon icon={faEye} />
          </Link>
        </div>
        <div className='DronesRecommendedItems-content-hover-images-1 cursor-pointer'>
          <FillHeart data={data} click={click} setClick={setClick} key={1} />
        </div>
      </div>
    </div>
  )
}

export default MainCardHover