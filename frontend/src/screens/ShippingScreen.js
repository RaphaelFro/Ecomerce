import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const ShippingScreen = () => {
  window.scrollTo(0, 0);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>ADRESSE DE LIVRAISON</h6>
          <input type="text" placeholder="Entez addresse" />
          <input type="text" placeholder="Entez ville" />
          <input type="text" placeholder="Entez code postal" />
          <input type="text" placeholder="Entez pays" />
          <button type="submit">
            <Link to="/payment" className="text-white">
              Continuer
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
