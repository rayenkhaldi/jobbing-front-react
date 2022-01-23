import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import api from "../../utils/api";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import MenuItem from "@mui/material/MenuItem";
import "./FormAjout.css";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function FormAjoutJob() {
  let navigate = useNavigate();

  const [regions, setRegions] = useState([
    "Choisir une région",
    "Gafsa",
    "Sousse",
    "Sfax",
    "Tunis",
    "Monastir",
  ]);
  let mm =
    String(new Date().getMonth() + 1) < 10
      ? 0 + String(new Date().getMonth() + 1)
      : String(new Date().getMonth() + 1);
  const today =
    new Date().getFullYear() + "/" + mm + "/" + new Date().getDate();
  const [job, setJob] = useState({
    nom: "",
    date: "",
    type: "",
    region: "Choisir une région",
    price: "",
    describe: "",
  });
  async function addJob() {
    if (job.nom != "") {
      await api.post("api/Jobs", job).then((res) => {
        console.log(res);
        navigate("/ListJobs");
      });
    } else alert("Svp saisir les données");
  }
  return (
    <div>
      <Navbar />
      <div className="addjob-container">
        <div className="formAjoutjob-container">
          <h3>Ajouter un offre de travail</h3>
          <div className="formAjout-input"></div>
          <div className="formAjout-input">
            <TextField
              id="outlined-basic"
              label="Type"
              variant="outlined"
              value={job.type}
              onChange={(e) => {
                setJob({ ...job, type: e.target.value });
              }}
            />
            <div></div>

            <TextField
              id="outlined-basic"
              label="Nom"
              variant="outlined"
              value={job.nom}
              onChange={(e) => {
                setJob({ ...job, nom: e.target.value });
              }}
            />
          </div>
          <div className="formAjout-input">
            <TextField
              type="date"
              id="outlined-basic"
              variant="outlined"
              value={job.date}
              onChange={(e) => {
                setJob({ ...job, date: e.target.value });
              }}
            />
          </div>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Choisir une région"
            value={job.region}
            onChange={(e) => {
              setJob({ ...job, region: e.target.value });
            }}
          >
            {regions.map((r) => {
              return (
                <MenuItem key={r} value={r}>
                  {r}
                </MenuItem>
              );
            })}
          </Select>
          <TextField
            type={"number"}
            id="outlined-basic"
            label="Price"
            variant="outlined"
            value={job.price}
            onChange={(e) => {
              setJob({ ...job, price: e.target.value });
            }}
          />

          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Description"
            style={{ width: 412 }}
            value={job.description}
            onChange={(e) => {
              setJob({ ...job, description: e.target.value });
            }}
          />
          <Button
            variant="contained"
            id="button-submit"
            endIcon={<SendIcon />}
            onClick={() => {
              addJob();
            }}
          >
            Ajouter
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FormAjoutJob;
