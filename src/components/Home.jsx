import  {React, useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/style.css';
import {linkedinLink , facebookLink , skypeLink} from '../assets/Lien'

export default function Home() {

  // const [open, setOpen] = useState(false)
  // const [scrollY, setScrollY] = useState(0)
  const [navBarColor, setNavBarColor] = useState(false)


  const listenScrollEvent = () => {
      window.scrollY > 10 ? setNavBarColor(true) : setNavBarColor(false);
  };

  useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
          window.removeEventListener("scroll", listenScrollEvent);
      };
  }, []);

  return (
    <>
      <div className="container-curved">
        <Navbar
          className={` ${
            navBarColor ? "bg-nav  fixed-top" : "bg-transparent"
          } `}
        >
          <Container className="justify-content-end text-white">
            <Nav>
              <Nav.Link href="#about">A propos</Nav.Link>
              <Nav.Link href="#competences">Competences</Nav.Link>
              <Nav.Link href="#projet">Projets</Nav.Link>
              <Nav.Link href="#contact">Contacts</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
        <div className="name-container">
          <div>
            Anjaratiana Fifaliana <br /> RANDRIAMALALA
          </div>
          <div className="name-title">DEVELLOPEUR FULL-STACK</div>
          <div className="text-center">
            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <img src="/images/fb.png" alt="Facebook" width="50" />
              </a>
              &nbsp;
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin.png" alt="Facebook" width="50" />
              </a>
              &nbsp;
              <a href={skypeLink} target="_blank" rel="noopener noreferrer">
                <img src="/images/skype.png" alt="Skype" width="50" />
              </a>
          </div>
        </div>

        <div className="img-home ">
          <img src="/images/programming.png" alt="Image home" />
        </div>

        <div className="text-center mobile-show">
          <h1>
            {" "}
            Anjaratiana Fifaliana <br /> RANDRIAMALALA{" "}
          </h1>
          <div className="name-title name-title w-75 m-auto my-3">
            DEVELLOPEUR FULL-STACK
          </div>
          <div className="text-center">
            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
              <img src="/images/fb.png" alt="Facebook" width="50" />
            </a>
            &nbsp;
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin.png" alt="Facebook" width="50" />
            </a>
            &nbsp;
              <a href={skypeLink} target="_blank" rel="noopener noreferrer">
                <img src="/images/skype.png" alt="Skype" width="50" />
              </a>
          </div>
        </div>

        <div>
          <svg viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,32L48,64C96,96,192,160,288,192C384,224,480,224,576,197.3C672,171,768,117,864,133.3C960,149,1056,235,1152,272C1248,309,1344,299,1392,293.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
