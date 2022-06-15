import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FirstText = styled.div`
    background: green;
    margin-bottom: 1rem;
    font-size: 5rem;
    color: black;
`

export const SecondText = styled.div`
    font-size: 20px;
    color: black;
    border: 1px;
`

export const AulaButton = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 1rem;
    color: white;
    padding: 10px;
    border: 2px solid green;
    border-radius: 0.8rem;
    margin-top: 3rem;
    &:hover{
        background-color: #333;
        color: white;
    }
`
export const Inicio = styled.a`
    cursor: pointer;
    font-size: 22px;
    text-decoration: none;
    color: white;
    margin-bottom: 15px;
    display: block;
`

export const Imagem = styled.img`
    margin: 0 auto;
    height: 350px;
    width: 350px;
    display: flex;
`