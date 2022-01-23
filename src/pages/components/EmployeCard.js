import React, { useState, useEffect } from "react";
import "./EmployeCard.css";
import api from "../../utils/api";

function EmployeCard() {
  const [employes, setEmployes] = useState([]);

  useEffect(() => {
    api.get("api/Employes").then((result) => {
      for (let index = 0; index < 4; index++) {
        setEmployes((olds) => [...olds, result.data[index]]);
      }
    });
  }, []);

  function randomColor(nb) {
    let array = ["cyan", "orange", "blue", "red"];
    let res = true;
    let n = 0;
    while (res) {
      n = Math.trunc(Math.random() * 10);
      if (n > 0 && n < nb + 1) {
        res = false;
      }
    }
    return array[n];
  }
  return (
    <div>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />
        <link rel="stylesheet" href="styles.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;1,200;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <div className="header">
          <h1>Notre top employés</h1>
          <h1>a partir de la base données</h1>
          <p>quelques employés au hasard</p>
        </div>
        <div className="row1-container">
          {employes.map((emp) => {
            return (
              <div className={"box " + randomColor(4)}>
                <h2>
                  {emp.nom} {emp.prenom}
                </h2>
                <p>{emp.type}</p>
                <img src="https://assets.codepen.io/2301174/icon-calculator.svg" />
              </div>
            );
          })}
        </div>
        <footer>
          <p className="attribution">
            &copy; Copyright{" "}
            <a href="https://www.linkedin.com/in/rayenkhaldi/">Rayen KHALDI</a>.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default EmployeCard;
