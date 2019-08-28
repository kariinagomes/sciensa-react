import React from 'react';
/*svg: tipo de programacao leve que pode fazer animacao; é um código (não uma imagem)*/
import logo from './logo.svg'; 
import './App.css';

/** sempre colocar ./ pq indica que é na pasta que eu estou */
// import ComponenteFuncao from './fundamentals/ComponenteFuncao';
// import ComponenteClasse from './fundamentals/ComponenteClasse';
// import Multicomponentes from './fundamentals/Multicomponentes';

import Lista from './fundamentals/Lista';
import ComponenteFuncao from './fundamentals/ComponenteFuncao';

function App() {

  const data = [ "ReactJs", "VueJs", "Angular2+", "AngularJs", "EmberJs" ]

  const gerarListaH6 = () => {
    return data.map(data => <ComponenteFuncao>{data}</ComponenteFuncao>)
  }  

  // const gerarListaH6 = () => 
  //   data.map(malElemento => <ComponenteFuncao textooo={malElemento} />);

  /**  
  * const rodrigo = () => { return "funcionou" };
  * const rodrigoPara = () => ( "funcionou" );
  * 
  * const programacaoFuncional = () => {
  *   return console.log;
  * }
  * programacaoFuncional()("existe");
  */

  return (
    <div className="App">
      <header className="App-header">
        
        {/* <ComponenteFuncao textooo="agora eh um teste" /> */}
        
        <img src={logo} className="App-logo" alt="logo" />
        <Lista data={data} />
        {/* <Multicomponentes /> */}
        {/* <ComponenteFuncao />
        <ComponenteClasse /> */}
        {gerarListaH6()}
      </header>
    </div>
  );
}

export default App;
