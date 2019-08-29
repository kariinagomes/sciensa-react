// usestate é um hooks nativo do react
import React, { useState, useEffect } from 'react';

export default() => {
    // é uma convenção, tem que ser primeiro o nome do estado e dps a função
    const [ count, setCount ] = useState(0);
    const [ texto, setTexto ] = useState("Eu uso hooks e sou doidão");
    const [ objeto, setObjeto ] = useState({ nome: "Karininha" });

    /**
     * Toda vez que incluir o vazio [], significa que 
     */
    useEffect(() => {
        console.log("Rolou o Mount");
        document.title = (`Você clicou ${count} vezes`)
    }, []);

    useEffect(() => {
        console.log("Rolou o Mount");
        
        /** é como se ficasse aguardando, e executasse essa função
         * somente quando o componente sair da tela
         */
        return () => {
            console.log("Isso é um unmount");
        }
    }, []);

    /**
     * O hooks é mais performático do que o didupdate pq
     * o didupdate roda qndo vc altera qualquer coisa,
     * aqui vc pode colocar os "observadores"
     */
    useEffect(() => {
        console.log("Rolou o Update");
        document.title = (`Você clicou ${count} vezes`)
    }, [count, texto]);

    return (
        <div>
            {objeto.nome}
            <h3>{texto}</h3>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>Mais um</button>
        </div>
    );
};

// import React from 'react';

// class ContadorClasse extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             count: 0
//         };
//     }
//     render() {
//         <div>
//             <p>Você clicou {this.state.count} vezes</p>
//             <button onClick={() => this.setState({ count: this.state.count + 1 })}>Mais um</button>
//         </div>
//     }
// }