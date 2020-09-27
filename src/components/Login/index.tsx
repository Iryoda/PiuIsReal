import React, { useState } from 'react';
import LogoIcon from '../../assets/img/logo.svg';

import { ThemeProvider } from 'styled-components';
import { theme1 } from '../../assets/style/globalstyle';
import {Container, Dados} from './styles';
import { useAuth } from '../../hooks/useAuth';

const LogIn = () => {

    let erroMsg;

    const { tokenRequest } = useAuth();
    const { erro } = useAuth();
    const [usuario, setUsuario] = useState(''); // Inicializa a variavel usuario com nada
    const [senha, setPassword] = useState('');

    const handleLogin = ()  => {
        tokenRequest(usuario, senha);
    };
        
    if(erro){
        erroMsg =
        <span> Ops! Nome de usuário ou senha incorretos.</span>
    }

    return(
        <ThemeProvider theme={theme1}>
            <Container>
                    <img src={LogoIcon} alt="Logo"/>
                    <span>Nome de Usuário:</span>
                    <Dados>
                        <input
                            type="text"
                            className= "nomeUsuario"
                            value = {usuario}
                            onChange = {(e) => setUsuario(e.target.value)} //Altera o valor de usuario
                        ></input>
                    </Dados>
                    <span>Senha:</span>
                    <Dados>
                        <input
                            type= "text"
                            className= "senhaUsuario"
                            value = {senha}
                            onChange = {(e) => setPassword(e.target.value)}//Altera o valor de senha
                        >
                        </input>
                    </Dados>
                    {erroMsg}
                    <button
                        type="submit"
                        onClick = {() => handleLogin()}//Faz o metodo post na API!
                    >Press Me</button>
            </Container>
        </ThemeProvider>
    )
}

export default LogIn;