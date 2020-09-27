import React from 'react';

import {ThemeProvider} from 'styled-components';
import {theme1} from '../../assets/style/globalstyle';
import {Box, Perfil, Nametag, Comentario} from './styles'

export interface User{ //Cria 'atributos' de user
    name: string;
    username: string;
    comentario: string;
    img:string;
} 

interface PostProps{ //Apenas para facilidade de aplicaçao podia usar de boa apenas 'User'
    user: User;
}

const Posts= () => {
    return(
        <ThemeProvider theme={theme1}>
            <Box> 
                <Perfil>
                    <img src="https://via.placeholder.com/150" alt="user"/>
                    <Nametag>
                        <span>name</span>
                        <span>username</span>
                    </Nametag>
                </Perfil>
                <Comentario> comentario  </Comentario>
            </Box>
        </ThemeProvider>
    )
}

export default Posts;