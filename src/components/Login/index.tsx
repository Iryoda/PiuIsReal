import React, { useState } from 'react';
import LogoIcon from '../../assets/img/logo.svg';

import {Container, Dados} from './styles';
import { useAuth } from '../../hooks/useAuth';
import eyeOpenIcon from '../../assets/img/eyeOpen.svg';
import eyeCloseIcon from '../../assets/img/eyeClose.svg';

const LogIn = () => {

    let erroMsg;

    const [showPassword, setShowPassword] = useState(false);
    const { tokenRequest } = useAuth();
    const { erro } = useAuth();
    const [usuario, setUsuario] = useState(''); // Inicializa a variavel usuario com nada
    const [senha, setPassword] = useState('');

    const handleLogin = ()  => {
        tokenRequest(usuario, senha);
    };
        

    if(erro){
        erroMsg =
        <p> Ops! Nome de usuário ou senha incorretos.</p>
    }

    return(
            <Container>
                    <img src={LogoIcon} alt="Logo"/>
                    <span>Nome de Usuário:</span>
                    <Dados>
                        <input
                            type ="text"
                            className = "nomeUsuario"
                            value = {usuario}
                            onChange = {(e) => setUsuario(e.target.value)} //Altera o valor de usuario
                        ></input>
                    </Dados>
                    <span>Senha:</span>
                    <Dados>
                        <input
                            type = {showPassword ? "text" : "password"}
                            className = "senhaUsuario"
                            value = {senha}
                            onChange = {(e) => setPassword(e.target.value)}//Altera o valor de senha
                        >
                        </input>
                        <div>
                            <img 
                                src = {showPassword ? eyeOpenIcon : eyeCloseIcon} 
                                alt = "eyeImg.svg"
                                onClick = {()=> setShowPassword(!showPassword)}/> 
                        </div>
                    </Dados>
                    {erroMsg}
                    <button
                        type="submit"
                        onClick = {() => handleLogin()}//Faz o metodo post na API!
                    >Press Me</button>
            </Container>
    )
}

export default LogIn;