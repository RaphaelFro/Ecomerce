import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";

const Login = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        <form className="Login col-md-8 col-lg-4 col-11">
          <input type="email" placeholder="Adresse E-mail" />
          <input type="password" placeholder="Mot de passe" />
          <button type="submit">Se connecter</button>
          <p>
            <Link to={"/register"}>Creer un compte</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
