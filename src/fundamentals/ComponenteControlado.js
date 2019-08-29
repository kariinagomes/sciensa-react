import React, { Component } from 'react';
import CompomenteComEstado from './ComponenteComEstado';

class ComponenteControlado extends Component {
    state = {
        inputValue: ''
    }

    render() {
        console.log('estamos no render', this.state)
        return (
            <div style={{ padding: 10 }}>
                <h2>Insira o Texto do Painel</h2>
                <input 
                    type='text' 
                    placeholder='Insira o texto...' 
                    value={this.state.inputValue} 
                    onChange={ event => this.setState({ inputValue: event.target.value })} //.target é especificamente esse elemento
                    // onChange={() => console.log('trainee')}    
                />
                <br />
                <br />
                {/* o controlado tem o componentecomestado como filho, por isso
                  * se colocar um console.log lá no render ComEstado, vai 
                  * aparecer tbm */}
                {/* <CompomenteComEstado text='qq coisa' /> */}
                <CompomenteComEstado text={this.state.inputValue} />
            </div>
        )
    }
}

export default ComponenteControlado;