import React from "react";
import "../assets/style.css";
import {linkedinLink , facebookLink, skypeLink} from '../assets/Lien'

const Footer = () => {

  return (
    <>
      <div className="footer">
        <svg viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,128L80,117.3C160,107,320,85,480,96C640,107,800,149,960,144C1120,139,1280,85,1360,58.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
        <div className="footer-information">
          <p>
            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
              <img src="/images/fb.png" alt="Facebook" width="50" />
            </a>
            &nbsp; &nbsp;
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin.png" alt="linkedin" width="50" />
            </a>
            &nbsp;&nbsp;
              <a href={skypeLink} target="_blank" rel="noopener noreferrer">
                <img src="/images/skype.png" alt="Skype" width="50" />
              </a>
            
          </p>
          <p>Antananarivo,Madagascar</p>
          <p>034 77 772 55 | anjaratox@yahoo.fr</p>
          <p id="copyright">
            © Copyright 2023 - Enzo Anjaratiana. Tous droits réservés.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
