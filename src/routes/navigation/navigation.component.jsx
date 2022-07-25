import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';


const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrwnLogo className='logo' />
            </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
  }

export default Navigation;

/*
  Outlet component renders it's children routes based on where <Outlet /> is placed in the component.
  The children components are in App.js
  Link component is link an anchor tag with more functionality.
  Fragment is a component used as a root element of the component.
  We import our svg img as a component by using ReactComponent.
  Stylesheet for our component is imported.
*/

/*
  Fragment is a container for our component that hold no value (extra nodes) in the DOM. (inspect the browser).
  <Link /> encapsulates elements and makes them links like <a/> tags
  * "to" attribute links the <Link /> to URL path.
  Outlet component renders it's children routes based on where <Outlet /> is placed in the component.
  *The children components are in App.js

  We export this component so that it can be used in App.js
*/