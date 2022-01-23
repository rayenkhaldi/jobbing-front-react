import React, { useEffect, useLayoutEffect, useState } from "react";
import "./hire.css";
import api from "../utils/api";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

function Hire() {
  let navigate = useNavigate();
  const [jobs, setjobs] = useState([]);
  const [employes, setemployes] = useState([]);
  const [job, setJob] = useState({});
  const [filtredJobs, setfiltredJobs] = useState([]);
  const [emp, setEmp] = useState({});
  const [filtredEmployes, setfiltredEmployes] = useState([]);

  useLayoutEffect(() => {
    async function fetchJobs() {
      await api.get("api/jobs").then((res) => {
        setfiltredJobs(res.data);
        setjobs(res.data);
      });
    }
    async function fetchEmployes() {
      await api.get("api/employes").then((res) => {
        setfiltredEmployes(res.data);
        setemployes(res.data);
      });
    }
    fetchJobs();
    fetchEmployes();
  }, []);

  function handleJobInput(e) {
    let filtred = [];
    if (e.target.value == "") setfiltredJobs(jobs);
    for (let j of jobs) {
      if (
        j.nom.includes(e.target.value) ||
        j.region.includes(e.target.value) ||
        j.type.includes(e.target.value)
      )
        filtred.push(j);
    }
    setfiltredJobs(filtred);
  }
  function handleEmployesInput(e) {
    let filtred = [];
    if (e.target.value == "") setfiltredEmployes(employes);
    for (let emp of employes) {
      if (
        emp.nom.includes(e.target.value) ||
        emp.region.includes(e.target.value) ||
        emp.type.includes(e.target.value) ||
        emp.prenom.includes(e.target.value) ||
        emp.email.includes(e.target.value) ||
        emp.cin.includes(e.target.value) ||
        emp.tel.includes(e.target.value)
      )
        filtred.push(emp);
    }
    setfiltredEmployes(filtred);
  }
  async function addHire() {
    if ((emp.id && job.id) != null) {
      await api
        .post("api/hires", { employeId: emp.id, jobId: job.id })
        .then((res) => {
          console.log(res.data);
          alert(
            "Vous avez embauché :" +
              emp.nom +
              " " +
              emp.prenom +
              " pour la poste intitulé: " +
              job.nom
          );

          navigate("/ListHires");
        });
    } else {
      console.log("no  emp no job");
      alert("Svp Choisir un offre et un employé");
    }
  }
  function resetData() {
    setEmp({});
    setJob({});
  }
  return (
    <div className="hire">
      <Navbar />
      <div className="hire-container">
        <div className="left-section">
          <h3>Choisir une offre</h3>
          <input
            className="input-search"
            type="text"
            placeholder="Chercher un offre"
            onChange={handleJobInput}
          />
          <div className="list-hire">
            {filtredJobs.map((j) => {
              return (
                <div
                  id={j.region}
                  key={j.id}
                  className="row-list"
                  onClick={() => {
                    setJob(j);
                  }}
                >
                  {j.nom}
                </div>
              );
            })}
          </div>
        </div>
        <div className="divider-job"></div>
        <div class="right-section">
          <h3>Choisir un employé</h3>
          <input
            className="input-search"
            type="text"
            placeholder="Chercher un employé"
            onChange={handleEmployesInput}
          />
          <div className="list-hire">
            {filtredEmployes.map((e) => {
              return (
                <div
                  id={e.region}
                  key={e.id}
                  className="row-list"
                  onClick={() => {
                    setEmp(e);
                  }}
                >
                  {e.nom} {e.prenom} &nbsp;
                  {e.type}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="button-container">
        <Button
          variant="contained"
          id="button-submit"
          endIcon={<SendIcon />}
          onClick={() => {
            addHire();
          }}
        >
          Ajouter
        </Button>
        <Button
          variant="contained"
          id="button-reset"
          endIcon={<HighlightOffIcon />}
          onClick={() => {
            resetData();
          }}
        >
          Reset
        </Button>
      </div>
      <span className="message">
        Vous avez embauché : {emp.nom} {emp.prenom} pour la poste intitulé:{" "}
        {job.nom}
      </span>
    </div>
  );
}
export default Hire;
