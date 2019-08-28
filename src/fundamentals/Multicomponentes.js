import React from "react";

import ComponenteFuncao from './ComponenteFuncao';
import ComponenteClasse from './ComponenteClasse';

export default () => (
    /** react fragment -> <> </> */
    <>
        <ComponenteFuncao />
        <ComponenteClasse />
    </>
);

/** Precisa importar o Fragment do react 
 * Não é bom fazer dessa forma, é mais custo */
// export default () => (
//     <Fragment>
//         <ComponenteFuncao />
//         <ComponenteClasse />
//     </Fragment>
// );

//** Não precisaria importar o fragment do react */
// export default () => (
//     <React.Fragment>
//         <ComponenteFuncao />
//         <ComponenteClasse />
//     </React.Fragment>
// );

/**
 * export default () => (
        [
            <ComponenteFuncao />,
            <ComponenteClasse />
        ]
    );
 
 export default () => (
     // O react não permite fazer isso direto, teria que usar div ou <>
     <ComponenteFuncao />
     <ComponenteClasse />
 );

 export default () => (
     <div>
         <ComponenteFuncao />
         <ComponenteClasse />
     </div>
 );
  */