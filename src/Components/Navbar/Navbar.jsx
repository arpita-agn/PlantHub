import React, { useContext, useState } from "react";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {

  const [menu, setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>TREECOM</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("flower")}}><Link style={{textDecoration: 'none'}} to='/flower'>Flower</Link>{menu==="flower"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("plant")}}><Link style={{textDecoration: 'none'}} to='/plant'>Plant</Link>{menu==="plant"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("fruits")}}><Link style={{textDecoration: 'none'}} to='/fruit'>Fruit</Link> {menu==="fruits"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
