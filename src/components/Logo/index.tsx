import React, { useState } from 'react';

import logoIcon from '../../assets/img/logo.svg';
import hamburguerIcon from '../../assets/img/hamburguer.svg';


import {Borda, Header, Content} from './styles';
import { useAuth } from '../../hooks/useAuth';
import { useModal } from '../../hooks/useModal';

interface LogoBoxProps{
    User: string;
}
const LogoBox: React.FC<LogoBoxProps> = (props) => {

     const {showModal} = useModal();
     const {logout} = useAuth();

     const handleLogout= () => {
         logout();
     }
     
     const [open, setMenuOpen] = useState(false);

     let menuOpen;

     if(open){
        menuOpen =
        <div>
            <span>Olá! {props.User}</span>
            <span>#home</span>
            <span>#trending</span>
            <span>#perfil</span>
            <br/>
            <span
                onClick = {() => showModal()}
                >+ New Post</span>
            <br/>
            <span
                onClick = {() => handleLogout()}
            >- Logout</span>
        </div>
     }

    return (
        <Borda>
            <Content>
                <Header>
                    <img 
                        src ={logoIcon} 
                        alt = "logoIcon"
                        height = "26px;"
                    />
                    <img 
                        src = {hamburguerIcon} 
                        height = "26px"
                        width = "26px" 
                        alt = "arrow"
                        onClick = {() => setMenuOpen(!open)}
                    />
                  </Header>
                    {menuOpen}
            </Content>
        </Borda>
        )
 }

export default LogoBox;