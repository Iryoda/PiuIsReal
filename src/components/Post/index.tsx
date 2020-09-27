import React from 'react';

import {ThemeProvider} from 'styled-components';
import {theme1} from '../../assets/style/globalstyle';
import {Box, Perfil, Nametag, Comentario} from './styles'

export interface User{ //Cria 'atributos' de user
    id: number;
    texto: string;
    usuario:{
        id: number;
        first_name: string;
        last_name: string;
        foto: string;
        username: string;
        sobre: string;
    }
    horario: string;
    favoritado_por: object;
    likers: object;

} 

interface PostProps{ //Apenas para facilidade de aplicaçao podia usar de boa apenas 'User'
    user: User;
}

const Posts: React.FC<PostProps> = ( { user }) => {
    return(
        <ThemeProvider theme={theme1}>
            <Box> 
                <Perfil>
                    <img src={user.usuario.foto} alt="user"/>
                    <Nametag>
                        <span>{user.usuario.first_name} {user.usuario.last_name}</span>
                        <span>@{user.usuario.username}</span>
                    </Nametag>
                </Perfil>
                <Comentario> {user.texto}</Comentario>
            </Box>
        </ThemeProvider>
    )
}

export default Posts;