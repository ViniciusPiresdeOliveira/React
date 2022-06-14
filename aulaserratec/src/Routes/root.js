import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { RenderizacaoCondicional } from "../Components/RenderizacaoCondicional";
import { AdicionarLista } from "../Components/AdicionarLista";
import { ListaDeCompras } from "../Components/ListaDeCompras";
import { Home } from "../Pages/Home";
import { QuemSomos } from "../Pages/QuemSomos";
import { NotFound } from "../Pages/NotFound";

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
                    <Route path={`/quemsomos/:nome/:idade`} element={<QuemSomos/>} />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}