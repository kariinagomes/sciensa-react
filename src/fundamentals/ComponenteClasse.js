import React from "react";

/** Não possui orientacao a objeto no javascript, apenas simula */
class ComponenteClasse extends React.Component {
    /** Todo componente de classe precisa ter o render (obrigatório);
     *  Pq é ele que faz com que apareca na tela
     */
    render() {
        return (
            /**ul: lista não ordenada */
            <ul>
                <li>Componente com função</li>
                <li>Componente de classe</li>
            </ul>
        );
    }
}

export default ComponenteClasse;