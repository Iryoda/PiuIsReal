import React, { useState } from 'react';

import logoIcon from '../../assets/img/logo.svg';
import hamburguerIcon from '../../assets/img/hamburguer.svg';

import {ThemeProvider} from 'styled-components';
import {Borda, Header, Content} from './styles';
import {theme1} from '../../assets/style/globalstyle';
import { useAuth } from '../../hooks/useAuth';

interface LogoBoxProps{
    User: string;
}
const LogoBox: React.FC<LogoBoxProps> = (props) => {

     const {logout} = useAuth();

     const handleLogout= () => {
         logout();
     }
     
     const [open, setMenuOpen] = useState(false);

     let menuOpen;

     if(open){
        menuOpen =
        <div>
            <span> {props.User}</span>
            <span>#home</span>
            <span>#trending</span>
            <span>#perfil</span>
            <br/>
            <span>+ New Post</span>
            <br/>
            <span
                onClick = {() => handleLogout()}
            >- Logout</span>
        </div>
     }

    return (
    <ThemeProvider theme ={theme1}>
        <Borda>
            <Content>
                <Header>
                    <img 
                        src = {logoIcon} 
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
    </ThemeProvider>
        )
 }

export default LogoBox;