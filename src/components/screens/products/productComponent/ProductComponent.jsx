import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "./../../../../redux/action/index";
import { useParams, useNavigate } from "react-router-dom";
import { ProductService } from "../../../../services/product.service";
import styles from "./ProductComponent.module.css";
import Header from "../../../layouts/header/Header";
import Footer from "../../../layouts/footer/Footer";

const ProductComponent = () => {
  const navigate = useNavigate();

  const [cartBtn, setCartBtn] = useState("ADD TO SHOPPING BAG");

  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const handleGoToCart = () => {
    navigate("/cart");
  };

  const dispatch = useDispatch();
  const handleCart = (product) => {
    if (cartBtn === "ADD TO SHOPPING BAG") {
      dispatch(addItem(product));
      setCartBtn("REMOVE FROM BAG");
    } else {
      dispatch(delItem(product));
      setCartBtn("ADD TO SHOPPING BAG");
    }
  };

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const data = await ProductService.getById(id);

      setProduct(data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Header />
      <div className={styles.sadas}>
        <div className={styles.productComponentContainer}>
          <div className={styles.colOne}>
            <img src={product.src} alt={product.title} />
          </div>
          <div className={styles.colTwo}>
            <div>
              <h3>{product.title}</h3>
            </div>
            <div className={styles.price}>
              <h3>${product.price}</h3>
            </div>
            <div className={styles.color}>
              <h4>Color: {product.color}</h4>
            </div>
            <div className={styles.btns}>
              <button
                className={styles.btnBlack}
                onClick={() => handleCart(product)}
              >
                {cartBtn}
              </button>
              <button className={styles.btnWhite} onClick={handleGoToCart}>
                GO TO SHOPPING BAG
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductComponent;
