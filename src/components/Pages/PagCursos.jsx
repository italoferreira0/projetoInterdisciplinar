import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import "../Pages/PagCursos.css"

import Footer from '../Footer';

//Cards--------------------------------------------------------------------
import ADS from '../Cards/ADS';
import Computacao from "../Cards/Computacao"
import SistemasInformacao from '../Cards/SistemasInformacao';

function PagCursos() {
    return (
        <div className='container'>
            <div className='App'>
                <Row className='align-items-center Saudacao'>
                    <Col >
                        <h1 className='SaudacaoText'>Que tal <br /> <p style={{ color: "white", textShadow: "0 0 5px #fff" }}>
                            Descobrir</p> sua área</h1>
                    </Col>

                </Row>

                <Row>
                    <h1 style={{ textAlign: "center", fontFamily: "'Times New Roman', Times, serif", fontSize: "50px", color: "white" }}
                    >Cursos</h1>
                </Row>

                <Row>

                    <Col>
                        <ADS />
                    </Col>
                    <Col>
                        <Computacao />
                    </Col>
                    <Col>
                        <SistemasInformacao />
                    </Col>

                </Row>
            </div>
        </div>
    )
}

export default PagCursos;