import React from 'react';
import './App.css';
import { NavBar } from './NavBar'
import { FirstPortion } from './components/FirstPortion'
import { LastPortion } from './components/LastPortion'
import { SecondPortion } from './components/SecondPortion'


function App() {



  const vert_align = {
    display: 'flex',
    flexDirection: 'column'
  }

  return (

    <div className="body">

          <div style={vert_align} fixed='top'>
            <NavBar />
          </div>

          <FirstPortion />
          <SecondPortion />
          <LastPortion />

    </div>

  );
}

export default App;
