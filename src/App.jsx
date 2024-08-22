import { useEffect, useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import '../src/App.css'

import API from './API';
import { getData } from './ApiService';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//Cards--------------------------------------------------------------------
import ADS from './components/Cards/ADS';
import Computacao from './components/Cards/Computacao';
import SistemasInformacao from './components/Cards/SistemasInformacao';
//-------------------------------------------------------------------------

function App() {
  // useEffect(()=> {
  //   getData()
  //     .then(data => console.log(data))

  // }, [])



  return (
    <div >
      <API />
      <Navbar />
      <div className='container'>
        <div className='App'>

          <Row>
            <Col md={3}>
              <ADS />
            </Col>
            <Col md={3}>
              <Computacao />
            </Col>
            <Col md={3}>
              <SistemasInformacao />
            </Col>
          </Row>
        </div>
      </div >
      <br /><br />
      <Footer />
    </div>

  );
}

export default App;
