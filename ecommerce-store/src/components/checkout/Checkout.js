import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import './Checkout.styles.scss'

function Checkout() {
    const { cartItems } = useContext(CartContext)


  return (
    <div>
        <h1>I be the chekcout page son</h1>
        <div>
            {cartItems.map((cartItem) => {
                    const { id, name, quantity } = cartItem;
                    return (
                <div key={id}>
                        <h2>{name}</h2>
                        <span>{quantity}</span>
                        </div>
                        )
                })}
        </div>
    </div>

  )
}

export default Checkout