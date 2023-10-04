import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./../../screens/products/Products";
import Home from "./../../screens/home/Home";
import ProductComponent from "../../screens/products/productComponent/ProductComponent";
import { Provider } from "react-redux";
import store from "./../../../redux/store";
import Cart from "../../screens/cart/Cart";

const Router = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route
            element={<ProductComponent />}
            path="/products/item/:id"
            exact
          />
          <Route
            element={<Products />}
            path="/products/category/:category"
            exact
          />

          <Route
            element={<Products />}
            path="/products/productType/:productType"
            exact
          />

          <Route element={<Cart />} path="/cart" />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};
export default Router;
