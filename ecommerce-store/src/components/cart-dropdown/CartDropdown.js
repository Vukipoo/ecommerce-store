import React from 'react'

import { useNavigate } from 'react-router-dom'

import './CartDropdown.styles.scss'
import Button from '../Button'
import CartItem from '../CartItem/CartItem'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const  CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
      navigate('/checkout')
    }

  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems.map((item) =>( <CartItem key={item.id} cartItem = {item}/>))}
        </div>
        <Button onClick = {goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown