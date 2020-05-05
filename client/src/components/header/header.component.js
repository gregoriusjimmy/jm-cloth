import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/Jm-brand.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink,
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>Shop</OptionLink>
        <OptionLink to='/contact'>About</OptionLink>
        {currentUser ? (
          // <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
          <OptionDiv onClick={signOutStart}>Sign Out</OptionDiv>
        ) : (
          <OptionLink to='/signin'>Sign In</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
//   return { currentUser, hidden };
// };

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
