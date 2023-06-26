import { Fragment, useContext, useState } from 'react'
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../components/cart-icon/CartIcon'
import CartDropdown from '../components/cart-dropdown/CartDropdown';

import { ReactComponent as CrwnLogo } from '../assets/crown.svg';
import { UserContext }  from '../contexts/UserContext'
import { CartContext, CartProvider }  from '../contexts/CartContext'


import { signOutUser } from '../utils/firebase.utils';

import './Navigation.styles.scss'


function Navigation() {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)


  

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/home'>
          <CrwnLogo className = 'logo' />
        </Link>

        <div className='nav-links-container'>
          <Link className='nav-links' to='/shop'>
            SHOP
          </Link>
            {
              currentUser ? (
                <span className='nav-link' onClick={signOutUser}>
                  {''}
                  SIGN OUT{''}
                  </span>
               ) : (
                <Link className='nav-links' to='/auth'>
                Sign in
              </Link>
              )}

              <CartIcon />
         
        </div>
          {isCartOpen && <CartDropdown />}
      </div>

      <Outlet />
    </Fragment>
  );
               }


export default Navigation