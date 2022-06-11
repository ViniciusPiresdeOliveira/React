import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { RenderizacaoCondicional } from "../Pages/RenderizacaoCondicional";
import { AdicionarLista } from "../Pages/AdicionarLista";
import { ListaDeCompras } from "../Pages/ListaDeCompras";

export const Root = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RenderizacaoCondicional />} />
                    <Route path="/addlista" element={<AdicionarLista />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}