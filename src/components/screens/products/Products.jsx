import React, { useEffect, useState } from "react";
import Header from "./../../layouts/header/Header";
import { useParams } from "react-router-dom";
import styles from "./products.module.css";
import Product from "./product/Product";
import Nav from "./nav/Nav";
import Sidebar from "./sidebar/Sidebar";
import Cards from "./cards/cards";
import axios from "axios";
import Footer from "../../layouts/footer/Footer";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { category, productType } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3001/products`, {
        params: {
          category: category,
          productType: productType,
        },
      });

      setProducts(response.data);
    };
    fetchData();
  }, [category, productType]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  let sortedProducts = [...products];

  if (sortType === "price_asc") {
    sortedProducts.sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/,/g, ""));
      const priceB = parseFloat(b.price.replace(/,/g, ""));
      return priceA - priceB;
    });
  } else if (sortType === "price_desc") {
    sortedProducts.sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/,/g, ""));
      const priceB = parseFloat(b.price.replace(/,/g, ""));
      return priceB - priceA;
    });
  }

  let filteredProducts = sortedProducts;

  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(
      ({ product, color, company, price, title }) =>
        product === selectedCategory ||
        color === selectedCategory ||
        company === selectedCategory ||
        price == selectedCategory ||
        title === selectedCategory
    );
  }

  const filteredItems = filteredProducts.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const result = filteredItems.map(({ id, src, title, price }) => (
    <Product key={id} id={id} src={src} title={title} price={price} />
  ));

  return (
    <>
      <Header />

      <h1 className={styles.caption}>{category || productType}</h1>

      <Nav
        query={query}
        handleInputChange={handleInputChange}
        handleClick={handleClick}
        handleSortChange={handleSortChange}
        sortType={sortType}
      />

      <div className={styles.flex}>
        <Sidebar handleChange={handleChange} />
        <Cards result={result} />
      </div>
      <Footer />
    </>
  );
};

export default Products;
