import './App.css';
import { useEffect, useState } from "react";
import Header from "./components/layout/Header/Header";
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/Home/Home"
import ProductDetails from "./components/Product/ProductDetails"
import Products from "./components/Product/Products"
import Search from "./components/Product/Search"
import LoginSignUp from './components/User/LoginSignUp';
import store from "./store"
import { loadUser } from './actions/userAction';
import { useSelector } from 'react-redux';
import UserOptions from './components/layout/Header/UserOptions';
import Profile from './components/User/Profile'
import ProtectRoute from "./components/Route/ProtectedRoute"
import UpdateProfile from "./components/User/UpdateProfile"
import UpdatePassword from "./components/User/UpdatePassword"
import ForgotPassword from "./components/User/ForgotPassword"
import Cart from "./components/Cart/Cart"
import Shipping from "./components/Cart/Shipping"
import ConfirmOrder from "./components/Cart/ConfirmOrder"
import Wrapper from "./components/Cart/Payment"
import OrderSuccess from "./components/Cart/OrderSuccess"

import MyOrders from "./components/Order/MyOrders"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import OrderDetails from './components/Order/OrderDetails';
import Dashboard from "./components/admin/Dashboard"
import ProductList from "./components/admin/ProductList"
import NewProduct from "./components/admin/NewProduct"
import About from "./components/layout/About/About"
import Contact from "./components/layout/Contact/Contact"

function App() {

  const {isAuthenticated,user} = useSelector(state => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }
  
React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Raleway",'Bree Serif',"PT Serif","Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();

  }, []);
  return (
    <Router>
    <Header />
    

    <Route exact path="/" component={Home} />
    <Route exact path="/product/:id" component={ProductDetails} />
    <Route exact path="/products" component={Products} />
    <Route  path="/products/:keyword" component={Products} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/contact" component={Contact} />

    <Route exact path="/about" component={About} />
    <ProtectRoute exact path="/account" component={Profile} />
    <ProtectRoute exact path="/me/update" component={UpdateProfile} />
    <ProtectRoute exact path="/password/update" component={UpdatePassword} />
    <Route exact path="/password/forgot" component={ForgotPassword} />
    <Route exact path="/login" component={LoginSignUp} />
    <Route exact path="/cart" component={Cart} />
    <ProtectRoute exact path="/shipping" component={Shipping} />

    {isAuthenticated && <UserOptions user={user} />}
    {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectRoute exact path="/process/payment" component={Wrapper} />
        </Elements>
      )}

    
    <ProtectRoute exact path="/success" component={OrderSuccess} />
    <ProtectRoute exact path="/orders" component={MyOrders} />
   <Switch>

   <ProtectRoute exact path="/order/confirm" component={ConfirmOrder} />
    <ProtectRoute exact path="/order/:id" component={OrderDetails} />
   </Switch>

   <ProtectRoute isAdmin={true} exact path="/admin/dashboard" component={Dashboard} />
   <ProtectRoute isAdmin={true} exact path="/admin/products" component={ProductList} />
   <ProtectRoute isAdmin={true} exact path="/admin/product" component={NewProduct} />

    
    
    <Footer />
    </Router>

    
  );
}

export default App;
