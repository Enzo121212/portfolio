import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { BiChevronUp } from 'react-icons/bi';


function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Affiche ou masque le bouton en fonction de la position de défilement
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Nettoyez l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Pour une animation de défilement fluide
    });
  };

  return (
    <Button
      className={`scroll-to-top ${isVisible ? 'show' : 'hide'}`}
      onClick={scrollToTop}
    >
   <BiChevronUp size={30} />
    </Button>
  );
}

export default ScrollToTop;
