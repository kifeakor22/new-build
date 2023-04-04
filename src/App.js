import React from 'react';
import {Helmet} from "react-helmet";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './App.css';
import NavBar from './components/navbar';
import Herogrid from './components/herogrid';
import Projects from './components/projects';



function App() {
  return (
    <div className="App">
      <Helmet>
        <title>New-Build</title>
      </Helmet>
      <NavBar/>
      <Herogrid/>
      <Projects/>
    </div>
  );
}

export default App;
