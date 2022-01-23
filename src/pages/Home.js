import React from "react";
import "./Home.css";
import Card from "./components/Card";
import EmployeCard from "./components/EmployeCard";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <section className="section1-container">
        <div className="section1-inner">
          <h2>RÉSERVEZ UN PROFESSIONNEL</h2>
          <div className="section1-inner-info">
            <span>
              <h3>Présentation du nouveau profil de monstre</h3>
              Nous avons travaillé dur pour apporter des changements dans les
              coulisses et pour vous offrir une meilleure expérience - tout cela
              pour que vous puissiez trouver plus facilement la bonne personne.
            </span>
            <img
              src="http://greffedemoelle.com/wp-content/uploads/2015/10/2Accompagnement-assistantes.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="section2-container">
        <Card />
      </section>
      <section className="section3-container">
        <EmployeCard />
      </section>
    </div>
  );
}

export default Home;
