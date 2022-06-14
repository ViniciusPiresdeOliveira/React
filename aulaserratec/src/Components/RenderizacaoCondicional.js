import React, {useState} from "react";

export const RenderizacaoCondicional = () => {

    const [isLogado, setIsLogado] = useState(false)

    function SaudacaoUsuario() {
        return (<h1>Bem vindo de Volta!</h1>)
    }

    function SaudacaoVisitante() {
        return (<h1>Por favor, registre-se</h1>)
    }

    function logar() {
        setIsLogado(true)
    }

    function validarLoginInLogoff(props) {
        if (props) {
            return <SaudacaoUsuario />
        } else {
            return <SaudacaoVisitante />
        }
    }

    return (
        <div>
            
                {validarLoginInLogoff(isLogado)}       
                <button onClick={() => logar()}>{isLogado ? 'Logoff' : 'Login'}</button>
        </div>
    )
}
