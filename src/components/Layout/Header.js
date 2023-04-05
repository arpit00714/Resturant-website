import { Fragment } from "react";

import mealsImage from '../../assets/jessica-loaiza-jxfByDVJmS4-unsplash.jpg';

import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
  return (
  <Fragment>
    <header className={classes.header}>
      <h1>Candy Shop</h1>
      <HeaderCartButton onClick={props.onShowCart} />  
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicios Chocolate!" />
    </div>
  </Fragment>
  );
};

export default Header;

