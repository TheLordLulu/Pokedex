import { useState } from 'react'

import './App.css'
import { Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import PokeList from './components/PokeList';

function App() {
  

  return (
    <>

      <Navbar/>
      {/* <Router>
        <Switch>

        </Switch>
      </Router> */}
      <PokeList />
      
    </>
  )
}

export default App
