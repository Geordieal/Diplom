import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delItem, clearCart } from "../../../redux/action/index";
import { Link } from "react-router-dom";
import styles from "./cart.module.css";
import Header from "./../../layouts/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Decimal from "decimal.js";
import ButtonBlack from "./../../ui/button/ButtonBlack";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  var fee = "FREE";
  let total = new Decimal(0);

  useEffect(() => {
    const cartItemsFromStorage = localStorage.getItem("cartItems");
    if (cartItemsFromStorage) {
      const parsedCartItems = JSON.parse(cartItemsFromStorage);
      setCartItem(parsedCartItems);
      dispatch({ type: "SET_ITEMS", payload: parsedCartItems });
    }
  }, []);

  const itemList = (item) => {
    const price = new Decimal(item.price.replace(",", "."));
    total = total.plus(price);
  };

  const CartNav = () => {
    return (
      <div className={styles.cartInfo}>
        <h3>{`SHOPPING BAG (${state.length})`}</h3>
        {state.map(itemList)}
        <span>{`Subtotal: $${total.toFixed(2)}`}</span>
      </div>
    );
  };

  const CartOrder = () => {
    return (
      <div className={styles.orderContainer}>
        <h3>ORDER SUMMARY</h3>
        <div className={styles.orderProps}>
          <div className={styles.orderPropsItem}>
            <span>Subtotal:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className={styles.orderPropsItem}>
            <span>Delivery Fee</span>
            <span>{fee}</span>
          </div>
          <div className={styles.orderPropsItem}>
            <span>Discount</span>
            <span>0%</span>
          </div>
        </div>
        <div className={styles.orderTotal}>
          <div className={styles.orderPropsItem}>
            <span className={styles.itemBold}>Order Total</span>
            <span className={styles.itemBold}>${total.toFixed(2)}</span>
          </div>
          <button className={styles.btnsCart}>checkout</button>
        </div>
      </div>
    );
  };

  const CartMobileOrder = () => {
    return (
      <div className={styles.orderMobileContainer}>
        <h3>ORDER SUMMARY</h3>
        <div className={styles.orderProps}>
          <div className={styles.orderPropsItem}>
            <span>Subtotal:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className={styles.orderPropsItem}>
            <span>Delivery Fee</span>
            <span>{fee}</span>
          </div>
          <div className={styles.orderPropsItem}>
            <span>Discount</span>
            <span>0%</span>
          </div>
        </div>
        <div className={styles.orderTotal}>
          <div className={styles.orderPropsItem}>
            <span className={styles.itemBold}>Order Total</span>
            <span className={styles.itemBold}>${total.toFixed(2)}</span>
          </div>
          <button className={styles.btnsCart}>checkout</button>
        </div>
      </div>
    );
  };

  const CartBtnsNav = () => {
    return (
      <div>
        <button className={styles.btnsCart} onClick={handleClearCart}>
          CLEAR CART
        </button>
      </div>
    );
  };

  const CartBtnContinue = () => {
    return (
      <div>
        <Link to={`/products/category/women`}>
          <button className={styles.btnsCart}>continue shopping</button>
        </Link>
      </div>
    );
  };

  const cartItems = (cartItem) => {
    return (
      <div className={styles.cartItem} key={cartItem.id}>
        <div className={styles.cartContainer}>
          <div className={styles.wrapItemFlex}>
            <div className={styles.imgWrap}>
              <img src={cartItem.src} alt={cartItem.title} />
            </div>
            <div className={styles.itemInfo}>
              <h3>{cartItem.title}</h3>
              <p className={styles.itemBold}>${cartItem.price}</p>
            </div>
          </div>
          <button
            onClick={() => handleClose(cartItem)}
            className={styles.btnClose}
          >
            <FontAwesomeIcon
              icon={faXmark}
              style={{ color: "#000000", fontSize: "20px" }}
              className={styles.icon}
            />
          </button>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className={styles.emptyCaption}>
        <p>You have 0 items in your Shopping Bag</p>
        <button className={styles.btnBlack}>continue shopping</button>
      </div>
    );
  };

  return (
    <>
      <Header setCartItem={setCartItem} />

      <div className={styles.container}>
        <div className={styles.cartItemWrap}>
          <div className={styles.cartHeader}>
            <CartNav />
            <div className={styles.cartBtnsContainer}>
              <CartBtnsNav />
              <CartBtnContinue />
            </div>
          </div>
          {state.length === 0 && emptyCart()}
          {state.length !== 0 && state.map(cartItems)}
        </div>
        <div>
          <CartOrder />
        </div>
      </div>
      <CartMobileOrder />
      {/* {state.length !== 0 && button()} */}
    </>
  );
};

export default Cart;
