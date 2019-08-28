import React from 'react';

class ComponentComEstado extends React.Component {

    /**
     * O constructor executa apenas uma vez, o render executa várias;
     * Sempre colocar o super no constructor (não interessa pq, apenas coloque hehehe)
     * 
     * Não poderia colocar lá no render pq quando alterasse o valor, 
     * execetutaria o render novamente (então sempre voltaria ao valor original) e
     * voltaria ao valor anterior sempre; j
     */
    constructor(props) {
        super(props);

        /**
         * O this é o CARA para acessar funções e atributos da classe;
         * O state é "natural" da classe, por isso o this.
         */
        this.state = {
            infoText: "Componente fechado",
            height: 35
        };
    }

    abrir = () => {
        this.setState({height: 200, infoText: "Componente aberto" });
    };

    fechar = texto => {
        this.setState({height: 35, infoText: texto });
    };

    // fechar = () => {
    //     this.setState({height: 35, infoText: "Componente fechado" });
    // };

    // spread operator(?) 
    // fechar = () => {
    //     this.setState({...this.state, height: 35 });
    // };

    render() {
        const objectStilo = {
            width: 400, 
            height: this.state.height, 
            padding: 10, 
            color: "black",
            backgroundColor: "lightGray"
        };

        return(
            <div style={{ padding: 10 }}>
                <div style={objectStilo}>{this.state.infoText}</div>
                <button type="button" onClick={this.abrir}>Abrir</button>
                <button type="button" onClick={() => this.fechar("karina")}>Fechar</button>
                {/* <button type="button" onClick={this.fechar}>Fechar</button> */}
            </div>
        );
    }
}

export default ComponentComEstado;