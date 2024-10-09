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
            INÍCIO
          </Link>
          <Link className="nav-btn text-white text-lg font-semibold" to={"solicitarcertidao"}>
            SOLICITAR CERTIDÃO
          </Link>
          <Link className="nav-btn text-white text-lg font-semibold" to={"certidoes"}>
            CERTIDÕES
          </Link>
        </nav>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
