import React from 'react';
/*svg: tipo de programacao leve que pode fazer animacao; é um código (não uma imagem)*/
import logo from './logo.svg'; 
import './App.css';

/** sempre colocar ./ pq indica que é na pasta que eu estou */
import ComponenteComEstado from './fundamentals/ComponenteComEstado';

function App() { 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteComEstado />
      </header>
    </div>
  );
}

export default App;
