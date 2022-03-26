import styled from 'styled-components'

export const CriacaoDeNotas = styled.div`
    background-color: #FEFFCE;
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: space-between;
`;

export const TextArea = styled.textarea`
    border: none;
        resize: horizontal; 
        width: 95%;
        background-color: #FEFFCE;
       :focus{
        outline: none;
        }
`;
