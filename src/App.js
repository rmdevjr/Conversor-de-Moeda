import React from 'react';
import logo from './logo.svg';
import './App.css';
import Conversor from "./component/Conversor"

function App() {
  
  return (
    
    
    
    <div className="App">
      
      <h1>Conversor De Moedas</h1>
      <hr/>
      <div className="linha1">
        <Conversor  moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor  moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="linha2">
        <Conversor  moedaA="CAD" moedaB="BRL"></Conversor>
        <Conversor  moedaA="BRL" moedaB="CAD"></Conversor>
      </div>
      <div className="linha3">
        <Conversor  moedaA="EUR" moedaB="BRL"></Conversor>
        <Conversor  moedaA="BRL" moedaB="EUR"></Conversor>
      </div>
    </div>
  );
}

export default App;
