import React from 'react';
/*svg: tipo de programacao leve que pode fazer animacao; é um código (não uma imagem)*/
import logo from './logo.svg'; 
import './App.css';

/** sempre colocar ./ pq indica que é na pasta que eu estou */
// import ComponenteFuncao from './fundamentals/ComponenteFuncao';
// import ComponenteClasse from './fundamentals/ComponenteClasse';
// import Multicomponentes from './fundamentals/Multicomponentes';

import Lista from './fundamentals/Lista';

function App() {

  const data = [ "ReactJs", "VueJs", "Angular2+", "AngularJs", "EmberJs" ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Lista data={data} />
        {/* <Multicomponentes /> */}
        {/* <ComponenteFuncao />
        <ComponenteClasse /> */}
      </header>
    </div>
  );
}

export default App;
