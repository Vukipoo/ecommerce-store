import React from 'react'
import './CartItem.styles.scss'

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
  return (
    <div className='cart-item-contaienr'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='item-details'>
          <span className='name'>{name}</span>
        </div>
        <span className='price'>{quantity} x ${price}</span>
    </div>
  )
}

export default CartItem