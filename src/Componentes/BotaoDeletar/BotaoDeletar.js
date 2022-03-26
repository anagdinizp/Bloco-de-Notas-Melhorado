import React from 'react';
import Icone from '../../Assets/Icones/IconLixeira.png'
import { CaixaDoBotao, BotaoLixeira } from './style';

const BotaoDeletar = ({ id, deletarNotas }) => {
    return(
        <CaixaDoBotao>
            <BotaoLixeira
            src={Icone}
            onClick={() => deletarNotas(id)}
            />
        </CaixaDoBotao>
    )
};

export default BotaoDeletar;