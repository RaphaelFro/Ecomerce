import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";

const Register = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        <form className="Login col-md-8 col-lg-4 col-11">
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Nom d'utilisateur" />
          <input type="email" placeholder="Adresse E-mail" />
          <input type="password" placeholder="Mot de passe" />

          <button type="submit">Inscription</button>
          <p>
            <Link to={"/login"}>
              Deja un compte ? <strong>Connectez-vous</strong>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
