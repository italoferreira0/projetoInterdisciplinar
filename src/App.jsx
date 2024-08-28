import { useEffect, useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import '../src/App.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  
  return (
    <div >
      <Navbar />
      <Footer/>
    </div>

  );
}

export default App;
