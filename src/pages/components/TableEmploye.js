import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import "./TableEmploye.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function TableEmploye() {
  let navigate = useNavigate();
  const [employes, setEmployes] = useState([]);
  useEffect(() => {
    api.get("api/Employes").then((res) => {
      setEmployes(res.data);
    });
  }, []);
  return (
    <div className="test">
      <Navbar />

      <div className="container">
        <h2 style={{ color: "white", fontWeight: "700" }}>
          Liste des Employés
        </h2>
        <div className=" table100 ">
          <div className="table100-body">
            <table>
              <tbody>
                {/* table header */}
                <tr>
                  <td className=" column1">Nom</td>
                  <td className=" column1">Prénom</td>
                  <td className=" column1">date de naissance </td>
                  <td className=" column1">Cin</td>
                  <td className=" column1">Tel</td>
                  <td className=" column1">Email</td>
                  <td className=" column1">Type</td>
                  <td className=" column1">Région</td>
                  <td className=" column1">Gender</td>
                </tr>

                {employes.map((emp) => {
                  return (
                    <tr key={emp.id}>
                      <td className=" column1">{emp.nom}</td>
                      <td className=" column1">{emp.prenom}</td>
                      <td className=" column1">{emp.dateN} </td>
                      <td className=" column1">{emp.cin}</td>
                      <td className=" column1">{emp.tel}</td>
                      <td className=" column1">{emp.email}</td>
                      <td className=" column1">{emp.type}</td>
                      <td className=" column1">{emp.region}</td>
                      <td className=" column1">{emp.gender}</td>
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
              navigate("/FormAjoutEmployes");
            }}
          >
            Ajouter un employé
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TableEmploye;
