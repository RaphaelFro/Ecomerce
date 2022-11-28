import React from "react";
const Orders = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>STATUT</th>
              <th>DATE</th>
              <th>TOTALE</th>
            </tr>
          </thead>
          <tbody>
            <tr className={"alert-success"}>
              <td>
                <a href={`/`} className="link">
                  1
                </a>
              </td>
              <td>Payé</td>
              <td>24 Juillet 2022</td>
              <td>250 €</td>
            </tr>
        
            <tr className={"alert-danger"}>
              <td>
                <a href={`/`} className="link">
                  2
                </a>
              </td>
              <td>Pas Payé</td>
              <td>15 Juillet 2022</td>
              <td>13 €</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
