import React from 'react';
/** como é anonima, pode colocar qlqr nome além de Item */
import ItemDaLista from './ItemList'; 

const List = props => {
    
    // const objeto = {
    //     para: "bonito",
    //     jaque: "Linda de morrer e boleira",
    //     lua: "Namorada do Nakamuta",
    //     amigos: {
    //         nakamuta: "eeeeee"
    //     }
    // };

    // const { jaque, para, lua } = objeto;
    // const { nakamura } = objeto.amigos;
    
    // const data = props.data 
    
    // desconstrução ou desestruturação (tirar o atributo)
    // const { data } = props;

    // o valor default seria vazio
    // const { data = {} } = props;

    const { data = [] } = props;

    const gerarItems = () => {
        // const items = data.map(dataItem => <ItemDaLista text={dataItem} />);
        // return items;
        return data.map(dataItem => <ItemDaLista text={dataItem} />);
    };

    /** O parenteses indica a separacao do codigo em varias linhas */
    // return (
    //     /** para cada item do data que encontrar, ele pega o p (do text) e printa ele */
    //     <ul>
    //         {data.map(dataItem => (
    //             <ItemDaLista text={dataItem} />
    //         ))}
    //     </ul>
    // );
    return <ul>{gerarItems()}</ul>;
};

export default List;