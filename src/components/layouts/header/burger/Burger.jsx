import React from "react";
import "./burger.css";
import { Link } from "react-router-dom";

const Burger = () => {
  return (
    <nav className="header__burger burger">
      <input id="burger__toggle" type="checkbox" />
      <label className="burger__btn" htmlFor="burger__toggle">
        <span></span>
      </label>

      <ul className="burger__box">
        <div className="burger__items">
          <li>
            <Link to={"products/category/women"} className="burger__item">
              WOMEN
            </Link>
          </li>
          <li>
            <Link to={"products/category/men"} className="burger__item">
              MEN
            </Link>
          </li>
          <li>
            <Link to={"products/category/bags"} className="burger__item">
              BAGS
            </Link>
          </li>
          <li>
            <Link className="burger__item">FAVORITE</Link>
          </li>
          <li>
            <Link className="burger__item">SIGN IN</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Burger;
