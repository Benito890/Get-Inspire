import React from 'react';

import Facebook from '../assets/images/facebook.png';
import Instagram from '../assets/images/instagram.png';
import Twitter from '../assets/images/twitter.png';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="container">
          <h3>Location</h3>
          <p>
            44 Rue Alphonse Penaud<br></br>75020 Paris
          </p>
        </div>

        <div className="container">
          <h3>Follow Us</h3>
          <ul>
            <a href="https://www.facebook.com">
              <img src={Facebook} alt="Facebook" />
            </a>

            <a href="https://www.instagram.com/?hl=fr">
              <img src={Instagram} alt="Instagram" />
            </a>

            <a href="https://www.twitter.com">
              <img src={Twitter} alt="Twitter" />
            </a>
          </ul>
        </div>

        <div className="container">
          <h3>About Get Inspire</h3>
          <p>Be inspired by the greatest quotes, write your own quotes and test your knowledge in a funny way</p>
        </div>
      </div>

      <p className="copyright">Copyright © 2021 All Right Reserved Get Inspire</p>
    </footer>
  );
}

export default Footer;
