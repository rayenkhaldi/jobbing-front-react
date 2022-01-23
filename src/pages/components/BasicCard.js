import * as React from "react";
import api from "../../utils/api";
import { useState, useEffect } from "react";
import "./BasicCard.css";

export default function BasicCard({ hire }) {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    api.get("api/Jobs").then((res) => {
      setJobs(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <div className="card-container">
        <span className="hire-type">{hire.job.type}</span>
        <span className="hire-jobdate">{hire.job.date}</span>
        <div className="hire-body">
          <span className="hire-jobnom"> {hire.job.nom}</span>
          <span className="hire-empnom">
            {hire.employe.nom} {hire.employe.prenom}
          </span>
          <p className="hire-jobdesc">{hire.job.description}</p>
        </div>
        <span className="hire-jobprice"> {hire.job.price}Dt</span>
        <span className="hire-jobregion">{hire.job.region}</span>
      </div>
    </div>
  );
}
