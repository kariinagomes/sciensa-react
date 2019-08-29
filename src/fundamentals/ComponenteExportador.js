import React from 'react';

const Comp1 = () => <p>Componente1</p>;
const Comp2 = () => <p>Componente2</p>;
const Comp3 = () => <p>Componente3</p>;

// Só pode um default, os abaixo são modules(?)
export default Comp3;
export { Comp1, Comp2 };