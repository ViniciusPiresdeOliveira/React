import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Foto from '../Components/img/react.png'
import { Inicio, Imagem } from "./style"

export const Home = () => {

    const [usuario] = useState({
        nome: "Vinícius",
        idade: 18
    })

    var navigate = useNavigate();

    function handleClickOne(){
        navigate(`/quemsomos/${usuario.nome}/${usuario.idade}`)
    }

    function handleClickTwo(){
        navigate(`/addlista/`)
    }

    return (
        <>
            <h1>Home</h1>
            <Imagem src={Foto} alt="React.js"/>
                <Inicio onClick={handleClickOne}>Conheça quem somos</Inicio>
                <Inicio onClick={handleClickTwo}>Lista de Compras</Inicio>
            
        </>
    )
}