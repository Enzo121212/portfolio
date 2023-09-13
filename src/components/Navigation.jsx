import React , {  useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Competences from "./Competences";
import ScrollToTop from './ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./Footer";
import BackgroundWithText from "./BackgroundWithText";
import Projects from "./Projects"
import Services from "./Services";

const Navigation = () => {

  useEffect(() => {
        AOS.init({
      duration: 1000, // Durée de l'animation en millisecondes
    });
  }, []);

  return <>
        <ScrollToTop/>
        <Home/>
        <About/>
        <BackgroundWithText/>
        <Competences/>
        <Projects/>
        <Services/>
        <Footer/>
  </>;
};

export default Navigation;
