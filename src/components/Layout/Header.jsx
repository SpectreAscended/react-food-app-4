import React, { useState } from 'react';
import classes from './Header.module.css';
import headerImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import Cart from '../Cart/Cart';

const Header = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const toggleShowCart = () => {
    setCartIsShown(prev => !prev);
  };

  return (
    <>
      <header className={classes.header}>
        <h1>Darlas Delicious Diner</h1>
        <HeaderCartButton onShowCart={toggleShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={headerImg} alt="Table with a variety of delicious foods" />
      </div>
      {cartIsShown && <Cart onShowCart={toggleShowCart} />}
    </>
  );
};

export default Header;
