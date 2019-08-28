import React from "react";

/** Funcao anonima. Poderia criar com um nome e exportar depois */
// export default function () {
//     return <h1>Primeiro componente maroto</h1>
// }

/** Boa pratica fazer dessa forma */
const ComponenteFuncao = () => (
    <h1>Primeiro component maroto</h1>
)

export default ComponenteFuncao;