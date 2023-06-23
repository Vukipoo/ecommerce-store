import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../assets/crown.svg';

import './Navigation.styles.scss'


function Navigation() {
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation