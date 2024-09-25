import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../components/Navbar.css';
import PagCursos from "./Pages/PagCursos";
import PagTeste from './Pages/PagTeste';

function Navbar() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg Custom-navbar">
                <div className="container-fluid  ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <audio preload="auto" id="myAudio" controls autoPlay loop>
                        <source src='/music.mp4' type="audio/mp4" />
                        <source src='/music.mp3' type="audio/mpeg" />
                        <source src='/music.ogg' type="audio/ogg" />
                        <source src='/music.wav' type="audio/wav" />
                    </audio>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        
                        <div className="navbar-nav">
                            <Link className="nav-link m-2" to="/" style={{ color: "#FFF", fontFamily: "bold", fontSize: "30px" }}>Cursos</Link>
                            <Link className="nav-link m-2" to="/teste-vocacional" style={{ color: "#FFF", fontFamily: "bold", fontSize: "30px" }}>Teste Vocacional</Link>
                        </div>
                    </div>
                    
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<PagCursos />} />
                <Route path="/teste-vocacional" element={<PagTeste />} />
            </Routes>
        </Router>
    );
}

export default Navbar;
