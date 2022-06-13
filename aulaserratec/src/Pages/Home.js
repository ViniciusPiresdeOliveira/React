import React, { useState } from "react";
import { Link } from "react-router-dom";
import { QuemSomos } from "./QuemSomos";

export const Home = () =>{

    const [usuario] = useState({
        nome: "Vinícius",
        idade: 18
    })

    return(
        <>
            <h1>Home</h1>
            <Link to={`/quemsomos/${usuario.nome}`}>Conheça quem somos</Link>
        </>
    )
}