import React, { Fragment } from 'react'
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./product"
 

const product = {
    name:"Blue Tshirt",
    images:[{ url:"httpsi.ibb.co/DRST11n/1.webp"}],
    price:1100,
    _id:"Vimal"
}
const Home = () => {
  return (
    <Fragment>
      <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            <Product  product = {product} />
          </div>
      
    </Fragment>
  )
}

export default Home
