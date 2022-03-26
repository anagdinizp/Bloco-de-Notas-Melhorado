import React, { useState, useEffect } from 'react';
import ListaDeNotas from './Componentes/ListaDeNotas/ListaDeNotas';
import { Container } from './Componentes/ListaDeNotas/style';
import ProcurarNotas from './Componentes/ProcurarNotas/ProcurarNotas';
import Cabecalho from './Componentes/Cabecalho/Cabecalho';
import {nanoid} from 'nanoid';

const App = () => {
    const [anotacoes, setAnotacoes] = useState([
        {
            id: nanoid(),
            text: 'Essa é a primeira nota',
            date: '13/03/2022',
        },
        {
            id: nanoid(),
            text: 'Essa é a segunda nota',
            date: '13/03/2022',
        },
        {
            id: nanoid(),
            text: 'Essa é a terceira nota',
            date: '13/03/2022',
        },    
    ]);
    const [procurar, setProcurar] = useState('');
    const [escuro, setEscuro] = useState(false);
    
    useEffect(() => {
        const notasSalvas = JSON.parse(
            localStorage.getItem('react-anotacoes-app-data')
        );
        if (notasSalvas){
            setAnotacoes(notasSalvas)
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem(
        'react-anotacoes-app-data',
        JSON.stringify(anotacoes)
    );
    }, [anotacoes]);

    const adicionarNotas = (text) => {
        const date = new Date();
        const novaNota = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        };
        const novasNotas = [...anotacoes, novaNota]
        setAnotacoes(novasNotas); 
    };

    const deletarNotas = (id) => {
        const novasNotas = anotacoes.filter((nota) => nota.id !== id);
        setAnotacoes(novasNotas);
    };

    return(
        <Container escuro={escuro}>
            <Cabecalho escuro={escuro} setEscuro={setEscuro}/>
            <ProcurarNotas setProcurar={setProcurar}/>
            <ListaDeNotas
            escuro={escuro}
            anotacoes={anotacoes.filter((nota)=> nota.text.toLocaleLowerCase().includes(procurar))}
            adicionarNotas={adicionarNotas}
            deletarNotas={deletarNotas}
            ></ListaDeNotas>
        </Container>
    );
};

export default App;