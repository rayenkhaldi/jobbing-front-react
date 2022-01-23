import "./App.css";
import Login from "./pages/Login";
import Navbar from "./pages/components/Navbar";
import Home from "./pages/Home";
import FormAjoutEmploye from "./pages/components/FormAjoutEmploye";
import FormAjoutJob from "./pages/components/FormAjoutJob";
import TableEmploye from "./pages/components/TableEmploye";
import TableJob from "./pages/components/TableJob";
import Hiring from "./pages/Hiring";
import Hire from "./pages/Hire";
import List from "./pages/ListHires";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListHires from "./pages/ListHires";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/listHires" element={<List />} />
          <Route path="/listEmployes" element={<TableEmploye />} />
          <Route path="/listJobs" element={<TableJob />} />
          <Route path="/" element={<Home />} />
          <Route path="/listHires" element={<ListHires />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/formAjoutEmployes" element={<FormAjoutEmploye />} />
          <Route path="/formAjoutJobs" element={<FormAjoutJob />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
