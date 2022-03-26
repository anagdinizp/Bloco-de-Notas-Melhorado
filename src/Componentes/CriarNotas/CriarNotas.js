import React, { useState } from 'react';
import { CriacaoDeNotas, TextArea } from './style';
import { Footer, Small } from '../Notas/style';
import BotaoSalvar from '../BotaoSalvar/BotaoSalvar';

const CriarNotas = ({ adicionarNotas }) => {
    const [novoTexto, setNovoTexto] = useState('');
    
    const caracteres = 200

    const digitando = (event) => {
        if (caracteres - event.target.value.length >= 0) {
            setNovoTexto(event.target.value)
        };
    };

    return(
        <CriacaoDeNotas>
            <TextArea 
            value={novoTexto}
            onChange={digitando}
            placeholder='criar nova nota'>
            </TextArea>
            <Footer>
                <Small>Restam {caracteres - novoTexto.length} caracteres</Small>
                <BotaoSalvar 
                adicionarNotas={adicionarNotas}
                novoTexto={novoTexto}
                setNovoTexto={setNovoTexto} 
                />
            </Footer>
        </CriacaoDeNotas>
    );
};

export default CriarNotas;