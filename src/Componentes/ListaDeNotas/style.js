import styled from 'styled-components'

export const Container = styled.div`
    padding-right: 10vw;
    padding-left: 10vw;
    min-height: 100vh;
    background-color: ${props => props.escuro ? "black" : "white"};
`;

export const Lista = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;