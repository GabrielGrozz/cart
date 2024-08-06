import React from "react";
import { Link } from "react-router-dom";
import tjprLogo from "../images/tjpr.png";

const Header = () => {
  return (
    <div className="bg-black w-[100%] h-[15vh] fixed flex justify-between p-3 pl-16">
      <img className="h-[90%] " src={tjprLogo} alt="tjpr" />
      <div className="flex items-center">
        <nav>
          <Link className="nav-btn text-white text-lg font-semibold" to={"/"}>
            HOME
          </Link>
          <Link className="nav-btn text-white text-lg font-semibold" to={"solicitarcertidao"}>
            SOLICITAR CERTIDAO
          </Link>
          <Link className="nav-btn text-white text-lg font-semibold" to={"certidoes"}>
            CERTIDOES
          </Link>
        </nav>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
