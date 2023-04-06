import React from 'react';
import {Helmet} from "react-helmet";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import NavBar from './components/navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Helmet>
          <title>Kc Portfolio</title>
        </Helmet>
        <NavBar/>
        <Routes>
          <Route path='/' element= {<Home/>}></Route>
           <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
