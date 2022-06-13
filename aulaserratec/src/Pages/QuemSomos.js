import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export const QuemSomos = () => {
    
    let { nome } = useParams();
    let navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    return (
        <>
            <h3>Usuário logado: {nome}</h3>
            <h1>Quem Somos</h1>
            <h2>Aqui você irá descobrir quem somos e o que fazemos</h2>
            <button onClick={handleClick}>Voltar para Home</button>
        </>
    )
}