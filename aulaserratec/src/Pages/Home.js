import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Foto from '../Components/img/react.png'
import { Inicio, Imagem } from "./style"
import { api } from "../Services/api";
import { DataContext } from "../Context/data";

export const Home = () => {

    let {nome} = useContext(DataContext)

    const [produto, setUsuario] = useState({
        nomeProduto:"",
        preco:""
    })

    useEffect (() => {
        const getUsuario = async () =>{
            const response = await api.get("/pedido")
            console.log(response.data);
            setUsuario(response.data)
        }
        getUsuario()
    },[])

    var navigate = useNavigate();

    function handleClickOne() {
        navigate(`/quemsomos/${nome}/`)
    }

    function handleClickTwo() {
        navigate(`/addlista/`)
    }

    return (
        <>
            <h1>Home</h1>
            <Imagem src={Foto} alt="React.js" />
                <Inicio onClick={handleClickOne}>Conheça quem somos</Inicio>
                <Inicio onClick={handleClickTwo}>Lista de Compras</Inicio>
            
        </>
    )
}