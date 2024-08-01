import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <div className="header">
    <nav>
      <Link to={"/"}>HOME</Link>
      <Link to={"solicitarcertidao"}>SOLICITAR CERTIDAO</Link>
      <Link to={"certidoes"}>CERTIDOES</Link>
    </nav>
  </div>
  );
};

export default Header;
