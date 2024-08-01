import { useState } from "react";
import CertificateForm from "./components/CertificateForm";
import "./App.css";
import Header from "./components/Header";
import Footer from  "./components/Footer";

//reaproveitamento
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
      );
}

export default App;
