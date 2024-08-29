import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import "../Pages/PagCursos.css"

import Footer from '../Footer';

//Cards--------------------------------------------------------------------
import ADS from '../Cards/ADS';
import Computacao from "../Cards/Computacao"
import SistemasInformacao from '../Cards/SistemasInformacao';
import EngComp from '../Cards/EngComp';

function PagCursos() {
    return (
        <div>
            <div className='container PagCursos' >
                <div className='App'>
                    <Row className='align-items-center Saudacao'>
                        <Col >
                            <h1 className='SaudacaoText'>QUE TAL <br /> <p style={{ color: "white", textShadow: "0 0 5px #fff" }}>
                                DESCOBRIR</p> SUA ÁREA?</h1>
                        </Col>
                    </Row>

                    <Row>
                        <h1 style={{ textAlign: "center", fontFamily: "'Times New Roman', Times, serif", fontSize: "50px", color: "white" }}
                        >Cursos</h1>
                    </Row>
                    <Row >
                        <Col  >
                            <ADS />
                            <SistemasInformacao />
                        </Col>
                        <Col >
                            <Computacao />
                        </Col>
                        <Col>
                            <EngComp />
                        </Col>
                    </Row>

                </div>
            </div>
          
        </div>

    )
}

export default PagCursos;