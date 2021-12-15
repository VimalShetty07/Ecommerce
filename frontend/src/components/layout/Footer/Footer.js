import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../../src/images/Appstore.png";
import "./Footer.css";


const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Blue Kart</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy;VimalShetty</p>
      </div>
       <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://instagram.com/v_mal_shetty.exe?utm_medium=copy_link">Instagram</a>
        <a href="https://www.linkedin.com/in/vimal-shetty-97b767185">LinkedIn</a>
        <a href="https://wa.link/syn3ki">Whatsapp</a>
      </div>
    </footer>
  );
};

export default Footer;