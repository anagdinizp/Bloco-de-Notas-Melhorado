import React from 'react';
import IMG from '../../Assets/Icones/IconLupa.png'
import { ProcurarNota, Lupa, Pesquisar } from './style';

const ProcurarNotas = ({setProcurar}) => {
    return (
        <ProcurarNota>
            <Lupa src={IMG}/>
            <Pesquisar onChangeCapture={(event) => setProcurar(event.target.value)}/>
        </ProcurarNota>
    );
};

export default ProcurarNotas;