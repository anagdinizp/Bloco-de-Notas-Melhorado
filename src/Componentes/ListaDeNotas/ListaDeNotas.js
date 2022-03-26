import React from 'react';
import Notas from '../Notas/Notas';
import { Lista } from './style';
import CriarNotas from '../CriarNotas/CriarNotas';

const ListaDeNotas = ({ anotacoes, adicionarNotas, deletarNotas }) => {
    return(
        <Lista>
            {anotacoes.map((nota) => 
            <Notas
            key={nota.id}
            id={nota.id}
            text={nota.text}
            date={nota.date}
            deletarNotas={deletarNotas}
            />)}
            <CriarNotas adicionarNotas={adicionarNotas}/>
        </Lista>
    );
};

export default ListaDeNotas;