import React from 'react';
import { BotaoModoNoturno } from './style';

const ModoNoturno = ({escuro, setEscuro}) => {
    return (
        <BotaoModoNoturno onClick={() => setEscuro(!escuro)}>Modo noturno</BotaoModoNoturno>
    );
};

export default ModoNoturno;