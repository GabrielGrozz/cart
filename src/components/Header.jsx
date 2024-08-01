import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <div className="header">
    <nav>
      <Link className="nav-btn" to={"/"}>HOME</Link>
      <Link className="nav-btn" to={"solicitarcertidao"}>SOLICITAR CERTIDAO</Link>
      <Link className="nav-btn" to={"certidoes"}>CERTIDOES</Link>
    </nav>
  </div>
  );
};

export default Header;
