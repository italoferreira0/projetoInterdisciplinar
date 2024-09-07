import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import "../Pages/PagCursos.css"



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