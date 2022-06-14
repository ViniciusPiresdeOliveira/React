import React from "react";
import { useNavigate } from "react-router-dom";
import { AulaButton } from "../Pages/style";
import { Container, ListaContainer } from "./style";

export const ListaDeCompras = (props) => {

    let navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    console.log("Lista de Compras:", props.lista);
    return (
        <>
            <h1>Lista de compras</h1>
            <ListaContainer>
                {props.lista.map(res => (
                    <Container>
                        <span>{res}</span>
                    </Container>
                ))}
            </ListaContainer>
            <AulaButton onClick={handleClick}>Voltar para Home</AulaButton>
        </>
    )
}
