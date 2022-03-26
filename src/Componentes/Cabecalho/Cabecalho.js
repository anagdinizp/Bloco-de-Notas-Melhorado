import React from 'react';
import { Header, Titulo } from './style';
import ModoNoturno from '../BotaoModoNoturno/BotaoModoNoturno';

const Cabecalho = ({escuro, setEscuro}) => {
    return(
        <Header>
            <Titulo escuro={escuro}>Bloco de Notas</Titulo>
            <ModoNoturno escuro={escuro} setEscuro={setEscuro}></ModoNoturno>
        </Header>
    );
};

export default Cabecalho;