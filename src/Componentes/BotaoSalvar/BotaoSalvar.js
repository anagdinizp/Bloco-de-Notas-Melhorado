import React from 'react';
import { BotaoDeSalvar } from './style';

const BotaoSalvar = ({ adicionarNotas, novoTexto, setNovoTexto }) => {
    const salvarClick = () => {
        if (novoTexto.trim().length > 0) {
            adicionarNotas(novoTexto)
            setNovoTexto('');
        };
    };
    return(
        <BotaoDeSalvar onClick={salvarClick}>Salvar</BotaoDeSalvar>
    );
};

export default BotaoSalvar;