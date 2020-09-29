import React, { useState } from 'react';

import {ThemeProvider} from 'styled-components';
import {theme1} from '../../assets/style/globalstyle';
import {Box, Perfil as User, Nametag, Comentario, Interactions} from './styles'

import flagIcon from '../../assets/img/flag.svg';
import commentIcon from '../../assets/img/comment.svg';
import repiuIcon from '../../assets/img/repiu.svg';
import heartIcon from '../../assets/img/heart.svg';
import heartIconPainted from '../../assets/img/heart_activate.svg';

export interface Piu{ //Cria 'atributos' de user
    id: number;
    texto: string;
    usuario: User; //usuario se comporta como a interface User. <- a ideia é não escrever user.usuario.ksdjflkasjdf
    horario: string;
    favoritado_por: object;
    likers: object;
    length: number;

} 

interface User{
    id: number;
    first_name: string;
    last_name: string;
    foto: string;
    username: string;
    sobre: string;
}

interface PostProps{ //Apenas para facilidade de aplicaçao podia usar de boa apenas 'User'
    piu: Piu;
    user: User;
    
}


const Posts: React.FC<PostProps> = ( { piu, user }) => {
    const [like, setLike] = useState(0);
    const [isliked, setIsLiked] = useState(false);

    function handleLike(){
        var number = like;
        if(isliked){
            number = number - 1;
            setLike(number);
            setIsLiked(!isliked);
        } else {
            number = number + 1;
            setLike(number);
            setIsLiked(!isliked)
        }
    }

    return(
        <ThemeProvider theme={theme1}>
            <Box> 
                <User>
                    <img src={user.foto} alt="user"/>
                    <Nametag>
                        <span>{user.first_name} {user.last_name}</span>
                        <span>@{user.username}</span>
                        <span>"{user.sobre}"</span>
                    </Nametag>
                </User>
                <Comentario> {piu.texto}</Comentario>
                <Interactions>
                        <img src={heartIcon} alt="heart" onClick={(e) => handleLike()}/>
                        <span>{piu.length}</span>
                        <img src={commentIcon} alt="comment"/>
                        <img src={repiuIcon} alt="repiu"/>
                        <img src={flagIcon} alt="flag"/>
                </Interactions>
            </Box>
        </ThemeProvider>
    )
}

export default Posts;