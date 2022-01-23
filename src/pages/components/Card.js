import React from "react";
import "./Card.css";

import api from "../../utils/api";
import { useState, useEffect, useLayoutEffect } from "react";

function Card({}) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api.get("api/Jobs").then((result) => {
      for (let index = 0; index < 6; index++) {
        setJobs((olds) => [...olds, result.data[index]]);
      }
    });
  }, []);
  function randomNb(nb) {
    let res = true;
    let n = 0;
    while (res) {
      n = Math.trunc(Math.random() * 10);
      if (n > 0 && n < nb + 1) {
        res = false;
      }
    }
    return n;
  }

  return (
    <div>
      <div className="main-container">
        <div className="heading">
          <h1 className="heading__title">Quelques offres aléatoire</h1>
          <p className="heading__credits">
            <a className="heading__link" target="_blank">
              nous réalisons vos rêves
            </a>
          </p>
        </div>
        <div className="cards">
          {jobs.map((job) => {
            return (
              <div className={"card card-" + randomNb(5)} key={job.id}>
                <div className="card__icon">
                  <i className="fas fa-bolt" />
                </div>
                <p className="card__exit">
                  <i className="fas fa-times" />
                </p>
                <h2 className="card__title">{job.nom}</h2>
                <p className="card__apply">
                  <a className="card__link" href="#">
                    {job.price}Dt <i className="fas fa-arrow-right" />
                  </a>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
