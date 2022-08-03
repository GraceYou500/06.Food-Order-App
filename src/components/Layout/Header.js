import React from 'react';
import classes from './Header.module.css';
import mealsImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return (
    <>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </div>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="meal" />
      </div>
    </>
  );
};

export default Header;
