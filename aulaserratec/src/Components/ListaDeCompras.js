import React from "react";

export const ListaDeCompras = (props) => {

    console.log("Lista de Compras:", props.lista);
    return (
        <>
            <h1>Lista de compras</h1>
            { props.lista.map(res => (
                <div>
                    <span>{res}</span>
                </div>
            ))}
        </>
    )
}
