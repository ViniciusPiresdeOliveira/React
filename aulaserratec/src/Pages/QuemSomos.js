import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FirstText, SecondText, Container, AulaButton } from "./style";
import {Input} from "./Input"

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
                <FirstText>QuemSomos</FirstText>
                <SecondText>QuemSomos</SecondText>
                <Input/>
            </Container>
            <AulaButton onClick={handleClick}>Voltar para Home</AulaButton>
        </>
    )
}