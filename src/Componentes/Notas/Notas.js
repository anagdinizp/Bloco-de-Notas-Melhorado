import React from 'react';
import { Nota, Texto, Footer, Small } from './style';
import BotaoDeletar from '../BotaoDeletar/BotaoDeletar';

const Notas = ({id, text, date, deletarNotas}) => {
    return(
        <Nota>
            <Texto>{text}</Texto>
            <Footer>
                <Small>{date}</Small>
                <BotaoDeletar
                id={id}
                deletarNotas={deletarNotas}
                />
            </Footer>
        </Nota>
    );
};

export default Notas;