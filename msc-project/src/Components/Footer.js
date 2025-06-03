import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Location: St. KH Sunanudin Kuningan Kanigoro</p>
          <p>Telephone: (0342)435678</p>
          <p>Email: contact@mikuningan.com</p>
          <p>WhatsApp: +62 878 4336 2321</p>
          <p>Facebook: MI Kuningan</p>
          <p>Instagram: mi_kuningan</p>
          <p>LinkedIn: MI Kuningan</p>
        </div>
        <div className="footer-column">
          <h3>Important Links</h3>
          <ul>
            <li><a href="/admission">Admission of New Students</a></li>
            <li><a href="/about">About MI Kuningan</a></li>
            <li><a href="/">Curriculum of MI Kuningan</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>
            "Where Young Minds Grow <br></br>and Dreams Take Flight"
          </h2>
        </div>
      </div>
      <div className="footer-row">
        <p>©2024 MI Kuningan</p>
      </div>
    </footer>
  );
};

export default Footer;