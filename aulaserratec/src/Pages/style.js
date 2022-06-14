import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FirstText = styled.div`
    background: #333;
    font-size: 1rem;
    color: #000;
`

export const SecondText = styled.div`
    background: #444;
    font-size: 50px;
    color: white;
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