import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";


const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "#2F2FA2",
  
  logoTransition:"100",
  logoAnimationTime:"2.5",
  
  link1Text: "Home",
  link1Family:"PT Serif",
  link1Transition:"0.5",
  link1AnimationTime:"2",
  link2Text: "Products",
  link2Transition:"link1Transition",
  link2AnimationTime:"2.2",

  link3Text: "Contact",
  link3Transition:"link2Transition",
  link3AnimationTime:"2.4",
  link4Text: "About",
  link4Transition:"link3Transition",
  link4AnimationTime:"2.6",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.7vmax",
  link1Color: "white",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "white",
  searchIconColor: "white",
  searchIconSize	:"2vmax",
  cartIconColor: "white",
  cartIconSize	:"2vmax",
  profileIconColorHover: "#F64C72",
  profileIconSize	:"2.5vmax",
  searchIconColorHover: "#F64C72",
  cartIconColorHover: "#F64C72",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;