import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FirstText, SecondText, Container, AulaButton } from "./style";
import {Input} from "../Components/Input"

export const QuemSomos = () => {

    let { nome } = useParams();
    let { idade } = useParams();
    let navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    return (
        <>
            <Container>
                <FirstText>Residência em TIC/Software</FirstText>
                <SecondText>QuemSomos: Grupo7</SecondText>
                <Input/>
            </Container>
            <AulaButton onClick={handleClick}>Voltar para Home</AulaButton>
        </>
    )
}