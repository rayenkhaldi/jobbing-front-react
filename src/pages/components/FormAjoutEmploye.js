import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import api from "../../utils/api";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import MenuItem from "@mui/material/MenuItem";
import "./FormAjout.css";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function FormAjoutEmploye() {
  let navigate = useNavigate();

  const [regions, setRegions] = useState([
    "Choisir une région",
    "Gafsa",
    "Sousse",
    "Sfax",
    "Tunis",
    "Monastir",
  ]);
  const [sexes, setGender] = useState(["Sexe", "Homme", "Femme"]);
  const [employe, setEmploye] = useState({
    nom: "",
    prenom: "",
    dateN: "",
    cin: "",
    tel: "",
    email: "",
    type: "",
    region: "Choisir une région",
    photo: "",
    gender: "Sexe",
  });
  async function addEmploye() {
    if (employe.nom != "") {
      await api.post("api/Employes", employe).then((res) => {
        console.log(res);
        navigate("/ListEmployes");
      });
    } else {
      console.log("empty fields");
      alert("Svp saisir les données");
    }
  }
  return (
    <div>
      <Navbar />
      <div class="add-container">
        <div className="formAjout-container">
          <h3>Ajouter un employé</h3>
          <div className="formAjout-input">
            <TextField
              id="outlined-basic"
              label="Nom"
              variant="outlined"
              value={employe.nom}
              onChange={(e) => {
                setEmploye({ ...employe, nom: e.target.value });
              }}
            />
          </div>
          <div className="formAjout-input">
            <TextField
              id="outlined-basic"
              label="Prénom"
              variant="outlined"
              value={employe.prenom}
              onChange={(e) => {
                setEmploye({ ...employe, prenom: e.target.value });
              }}
            />
          </div>
          <div className="formAjout-input">
            <TextField
              id="outlined-basic"
              label="Email"
              type={"email"}
              variant="outlined"
              required
              value={employe.email}
              onChange={(e) => {
                setEmploye({ ...employe, email: e.target.value });
              }}
            />
          </div>
          <div className="formAjout-input">
            <TextField
              type={"date"}
              id="outlined-basic"
              variant="outlined"
              label=""
              value={employe.dateN}
              onChange={(e) => {
                setEmploye({ ...employe, dateN: e.target.value });
              }}
            />
          </div>
          <div className="formAjout-input">
            <TextField
              id="outlined-basic"
              label="Cin"
              variant="outlined"
              value={employe.cin}
              onChange={(e) => {
                setEmploye({ ...employe, cin: e.target.value });
              }}
            />
          </div>
          <div className="formAjout-input">
            <TextField
              id="outlined-basic"
              label="Tel"
              variant="outlined"
              value={employe.tel}
              onChange={(e) => {
                setEmploye({ ...employe, tel: e.target.value });
              }}
            />
          </div>
          <div className="formAjout-input">
            <TextField
              id="outlined-basic"
              label="Type"
              variant="outlined"
              value={employe.type}
              onChange={(e) => {
                setEmploye({ ...employe, type: e.target.value });
              }}
            />
          </div>
          <div className="formAjout-input">
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Sexe"
              value={employe.gender}
              onChange={(e) => {
                setEmploye({ ...employe, gender: e.target.value });
              }}
            >
              {sexes.map((r) => {
                return (
                  <MenuItem key={r} value={r}>
                    {r}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Choisir une région"
            value={employe.region}
            onChange={(e) => {
              setEmploye({ ...employe, region: e.target.value });
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
          <Button
            variant="contained"
            id="button-submit"
            endIcon={<SendIcon />}
            onClick={() => {
              addEmploye();
            }}
          >
            Ajouter
          </Button>
        </div>
      </div>
    </div>
  );
}
export default FormAjoutEmploye;
