import React from "react";
import Header from "./../../layouts/header/Header";
import Hero from "../../layouts/hero/Hero";
import SliderSection from "../../layouts/slider/SliderSection";
import styles from "./../../../assets/styles/container.module.css";
import Highlights from "../../layouts/highlights/Highlights";
import Gallery from "../../layouts/gallery/Gallery";
import Novelty from "../../layouts/novelty/Novelty";
import HelpBar from "../../layouts/helpbar/HelpBar";
import Footer from "../../layouts/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />

      <Hero />
      <div className={styles.container}>
        <Highlights />
        <Novelty />
        <Gallery />
        <SliderSection />
        <HelpBar />
      </div>
      <Footer />
    </>
  );
};

export default Home;
