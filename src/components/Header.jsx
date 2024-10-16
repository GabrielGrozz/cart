import React from "react";
import { Link } from "react-router-dom";
import tjprLogo from "../images/tjpr.png";

const Header = () => {
  return (
    <div className="bg-black w-[100%] h-[15vh] fixed flex justify-between p-3 pl-16">
      <img className="h-[90%] " src={tjprLogo} alt="tjpr" />
      <div className="flex items-center">
        <nav className="flex">
          <div className=" nav-btn-container ">
            <Link className="nav-btn " to={"/"}>
              INÍCIO
            </Link>
          </div>
          <div className="nav-btn-container">
            <Link className="nav-btn" to={"solicitarcertidao"}>
              SOLICITAR CERTIDÃO
            </Link>
          </div>
          <div className="nav-btn-container">
            <Link className="nav-btn" to={"certidoes"}>
              CERTIDÕES
            </Link>
          </div>
        </nav>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
