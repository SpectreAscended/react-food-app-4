import React from 'react';
import classes from './Header.module.css';
import headerImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import Cart from '../Cart/Cart';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Darlas Delicious Diner</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={headerImg} alt="Table with a variety of delicious foods" />
      </div>
      <Cart />
    </>
  );
};

export default Header;
