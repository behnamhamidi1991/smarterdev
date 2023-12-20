import style from "./header.module.css";
import logo from "../../assets/vite.svg";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useState } from "react";
import CourseContext from "../../Context/CourseContext/CourseContext";

function Header() {
  const { courses, cart } = useContext(CourseContext);

  const cartItemsNumber = courses.filter(
    (course) => course.addedToCart === true
  ).length;

  return (
    <header className={style.header}>
      <div className={style.leftSide}>
        <Link to="/" className={style.logoContainer}>
          <img src={logo} className={style.logo} alt="logo" />
          <h4>SmarterDev</h4>
        </Link>
        <div className={style.shoppingCart}>
          <Link to="/cart">
            <span className={style.shoppingCartNumber}>{cart.length}</span>
            <FaShoppingCart className={style.cartIcon} />
          </Link>
        </div>
      </div>

      <div className={style.navlinks}>
        <ul className={style.navContainer}>
          <Link to="/" className={style.navItem}>
            Home
          </Link>
          <Link to="/blog" className={style.navItem}>
            Blog
          </Link>
          <Link to="/about" className={style.navItem}>
            About
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
