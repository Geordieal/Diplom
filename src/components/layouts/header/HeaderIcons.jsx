import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "../header/header.module.css";
import { Link } from "react-router-dom";
import { setCartItem } from "../../../redux/action";

const HeaderIcons = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.addItem);

  useEffect(() => {
    const cartItemsFromStorage = localStorage.getItem("cartItems");
    if (cartItemsFromStorage) {
      const parsedCartItems = JSON.parse(cartItemsFromStorage);
      dispatch(setCartItem(parsedCartItems));
    }
  }, [dispatch]);

  return (
    <>
      <div className={styles.headerIcon}>
        <a href="1">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#000000" }}
            className={styles.icon}
          />
        </a>
      </div>

      <div className={styles.headerIcon}>
        <a href="2">
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "#000000" }}
            className={styles.icon}
          />
        </a>
      </div>

      <div className={styles.headerIcon}>
        <a href="3">
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: "#000000" }}
            className={styles.icon}
          />
        </a>
      </div>

      <div className={styles.headerIcon}>
        <Link to={"/cart"}>
          <FontAwesomeIcon
            icon={faBagShopping}
            style={{ color: "#000000" }}
            className={styles.icon}
          />{" "}
          {state.length}
        </Link>
      </div>
    </>
  );
};

export default HeaderIcons;
