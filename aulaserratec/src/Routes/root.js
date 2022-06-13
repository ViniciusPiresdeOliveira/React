import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { RenderizacaoCondicional } from "../Pages/RenderizacaoCondicional";
import { AdicionarLista } from "../Pages/AdicionarLista";
import { ListaDeCompras } from "../Pages/ListaDeCompras";
import { Home } from "../Pages/Home";
import { QuemSomos } from "../Pages/QuemSomos";

const usuario = {
    nome: "Vinícius",
    idade: 18
}

export const Root = () => {
    return (
        <>
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RenderizacaoCondicional />} />
                    <Route path="/addlista" element={<AdicionarLista />} />
                </Routes>
            </BrowserRouter> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quemsomos/" element={<QuemSomos obj={usuario} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}