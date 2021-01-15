import styled from 'styled-components';

export const Button = styled.button`
    color: blue;
    font-size: 1rem;
    margin: 1rem;
    padding: 0.25rem 1rem;
    border: 2px solid blue;
    border-radius: 3px;
    display: inline-block;
`;

export const Input = styled.input`
    border: 2px solid blue;
    border-radius: 3px;
    margin: 1rem;
    padding: 0.5rem 1rem;
`;

export const Cards = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.article`
    border: 2px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 1rem;
    padding:1rem;
`;

export const CardContent = styled.div`
    width: 100%;
    font-size: 2rem;
    color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

`;

export const CardContentExtra = styled.div`
    text-align: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
`;

