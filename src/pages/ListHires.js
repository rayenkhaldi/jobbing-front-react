import React, { useState, useEffect } from "react";
import BasicCard from "./components/BasicCard";
import api from "../utils/api";
import "./listhires.css";
import Navbar from "./components/Navbar";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

function ListHires() {
  let navigate = useNavigate();

  const [employes, setEmployes] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [hires, setHires] = useState([]);
  const [finalHires, setFinalHires] = useState([]);
  useEffect(() => {
    api.get("api/Employes").then((res) => {
      setEmployes(res.data);
    });
  }, [jobs]);
  useEffect(() => {
    api.get("api/Jobs").then((res) => {
      setJobs(res.data);
    });
  }, []);
  useEffect(() => {
    api.get("api/Hires").then((res) => {
      setHires(res.data);
      getHires();
    });
  }, [employes]);
  function getHires() {
    let array = [];
    for (let h of hires) {
      let hire = h;
      hire.employe = employes.find((e) => e.id == h.employeId);
      hire.job = jobs.find((e) => e.id == h.jobId);
      array.push(h);
    }
    setFinalHires(array);
  }
  return (
    <div>
      <Navbar />
      <div className="list-container">
        {finalHires.length != 0 &&
          finalHires.map((hire) => {
            return (
              <div>
                <BasicCard hire={hire} />
              </div>
            );
          })}
      </div>
      <div className="button-container-t">
        <Button
          variant="contained"
          id="button-submit"
          endIcon={<AddIcon />}
          onClick={() => {
            navigate("/hire");
          }}
        >
          Embauche
        </Button>
      </div>
    </div>
  );
}

export default ListHires;
