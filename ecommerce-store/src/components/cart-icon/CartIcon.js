import { useContext } from 'react'

import './CartIcon.styles.scss'

import { CartContext } from '../../contexts/CartContext'


import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

function CartIcon() {

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen) 

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <ShoppingIcon className = 'shopping-icon'/>
        <span className='item-count'>{cartCount}</span>

    </div>
  )
}

export default CartIcon