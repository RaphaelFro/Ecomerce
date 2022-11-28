import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Besoin de plus de conseils ?</h2>
              <p>Inscrivez-vous gratuitement et obtenez les derniers conseils.</p>
              <form className="form-section">
                <input placeholder="Votre Email..." name="email" type="email" />
                <input value="OUI. Je veux!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
