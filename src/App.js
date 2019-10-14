import React from 'react';
import logo from './images/logo.svg';
import Header from "./components/header"
import './containers/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Detalles from './components/UserDetail';

function App() {
  return (
    <Router>
    <Header/>
    <img src={logo} className="App-logo" alt="logo" />
    <Route path="./Detalles" component={Detalles}/>
    

    </Router>

  );
}

export default App;
