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
    color: #678;
    border: 2px solid #c79;
    border-radius: 0.4rem;
    margin-top: 1rem;
    &:hover{
        background-color: #678;
        color: #fff;
    }
`
export const Inicio = styled.a`
    cursor: pointer;
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