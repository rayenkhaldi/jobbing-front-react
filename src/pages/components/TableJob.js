import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import "./TableEmploye";
import Button from "@mui/material/Button";

import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function TableJob() {
  let navigate = useNavigate();

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    api.get("api/Jobs").then((res) => {
      setJobs(res.data);
    });
  }, []);
  return (
    <div className="test">
      <Navbar />
      <div className="container">
        <h2 style={{ color: "white", fontWeight: "700" }}>Liste des offres</h2>
        <div className=" table100 ">
          <div className="table100-body">
            <table>
              <tbody>
                {/* table header */}
                <tr>
                  <td className=" column1">Titre d'offre</td>
                  <td className=" column1">Type</td>
                  <td className=" column1">Région</td>
                  <td className=" column1">Prix</td>
                  <td className=" column1">Date de début</td>
                </tr>

                {jobs.map((job) => {
                  return (
                    <tr key={job.id}>
                      <td className=" column1">{job.nom}</td>
                      <td className=" column1">{job.type}</td>
                      <td className=" column1">{job.region}</td>
                      <td className=" column1">{job.price}</td>
                      <td className=" column1">{job.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="button-container">
          <Button
            variant="contained"
            id="button-submit"
            endIcon={<AddIcon />}
            onClick={() => {
              navigate("/FormAjoutJobs");
            }}
          >
            Ajouter un offre
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TableJob;
