import React from "react";

const ProfileTabs = () => {
  return (
    <>
      <form className="row  form-container">
        <div className="col-md-6">
          <div className="form">
            <label for="account-fn">Nom d'utilisateur</label>
            <input className="form-control" type="text" required />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form">
            <label for="account-email">Adresse e-mail</label>
            <input className="form-control" type="email" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label for="account-pass">Nouveau mot de passe</label>
            <input className="form-control" type="password" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label for="account-confirm-pass">Confirmer mot de passe</label>
            <input className="form-control" type="password" />
          </div>
        </div>
        <button type="submit">Modifier profil</button>
      </form>
    </>
  );
};

export default ProfileTabs;
