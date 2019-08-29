import React from 'react';
/*svg: tipo de programacao leve que pode fazer animacao; é um código (não uma imagem)*/
import logo from './logo.svg'; 

/** sempre colocar ./ pq indica que é na pasta que eu estou */
//import ComponenteComEstado from './fundamentals/ComponenteComEstado';
//import ComponenteControlado from './fundamentals/ComponenteControlado';
//também poderia ser assim pq default pode ter qlqr nome: import ahuaiiauhdiuashd, { Comp1 } from ;
//import {default as CompAmigo, Comp1 as Comp123, Comp2} from './fundamentals/ComponenteExportador'; // EcmaScript eh a convencao do javascript
//import Comp3, { Comp1 } from './fundamentals/ComponenteExportador';
import ComponenteComHooks from './fundamentals/ComponenteComHooks';

import './App.css';

function App() { 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ComponenteComEstado /> */}
        {/* <ComponenteControlado />
        <Comp1 />
        <Comp3 /> */}
        <ComponenteComHooks />
      </header>
    </div>
  );
}

export default App;
