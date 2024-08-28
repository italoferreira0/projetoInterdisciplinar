import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../components/Navbar.css';
import PagCursos from "./Pages/PagCursos";
import PagTeste from './Pages/PagTeste';

function Navbar() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg bg-body-tertiary Custom-navbar">
                <div className="container-fluid Custom-navbar">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/">Cursos</Link>
                            <Link className="nav-link" to="/pagcursos">Cursos</Link>
                            <Link className="nav-link" to="/pagteste">Teste Vocacional</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/pagcursos" element={<PagCursos />} />
                <Route path="/pagteste" element={<PagTeste />} />
            </Routes>
        </Router>
    );
}

export default Navbar;
