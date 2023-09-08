import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages";
import InfaqJumat from "./pages/infaq-jumat";
import InfaqKamis from "./pages/infaq-kamis";
import Proker from "./pages/proker";
import KritikSaran from "./pages/kritiksaran";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/infaq-jumat" element={<InfaqJumat/>}/>
          <Route path="/infaq-kamis" element={<InfaqKamis/>}/>
          <Route path="/proker" element={<Proker/>}/>
          <Route path="/kritik-saran" element={<KritikSaran/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;