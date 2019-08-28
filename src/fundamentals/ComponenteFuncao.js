import React from "react";

/** Funcao anonima. Poderia criar com um nome e exportar depois */
// export default function () {
//     return <h1>Primeiro componente maroto</h1>
// }

/** Boa pratica fazer dessa forma */
// const ComponenteFuncao = () => (
//     <h6>Primeiro component maroto</h6>
// )

const ComponenteFuncao = props => <h6>{props.children}</h6>

//const ComponenteFuncao = props => <h6>{props.textooo}</h6>

export default ComponenteFuncao;