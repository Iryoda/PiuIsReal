import React from 'react';

import {Box, Perfil as User, Nametag, Comentario, Interactions} from './styles'

import favIcon from '../../assets/img/star.svg';
import favIconPainted from '../../assets/img/star_painted.svg';
import commentIcon from '../../assets/img/comment.svg';
import repiuIcon from '../../assets/img/repiu.svg';
import heartIcon from '../../assets/img/heart.svg';
import heartIconPainted from '../../assets/img/heart_activated.svg';
import trashIcon from '../../assets/img/trash.svg';

import { usePost } from '../../hooks/usePost';
import { useAuth } from '../../hooks/useAuth';
import { useDelete } from '../../hooks/usaDelete';
import { useModal } from '../../hooks/useModal';

export interface Piu{ //Cria 'atributos' de user
    id: number;
    texto: string;
    usuario: User; //usuario se comporta como a interface User. <- a ideia é não escrever user.usuario.ksdjflkasjdf
    horario: string;
    favoritado_por: User[];
    likers: User[];

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
    isLiked: boolean;
    isFaved: boolean
}
// O que importa ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const Posts: React.FC<PostProps> = ( { piu, user, isLiked, isFaved}) => {
    
    let owner;

    const {userProps, token} = useAuth();
    const { darLike} = usePost();
    const { showConfirmModal} = useModal();
    
    function handleLike(){
        darLike("dar-like", userProps.id, piu.id, token);
    }

    if(user.id === userProps.id){
        owner = <img src = {trashIcon}
                     alt = "flag"
                     onClick = {() => showConfirmModal(piu.id, token)}
                     />
    }else {
        owner =<img 
                src = {isFaved ? favIconPainted : favIcon } 
                alt = "flag"
                onClick = {() => darLike("favoritar", userProps.id, piu.id, token)}

               />
    }

// Return ------------------------------------
    return(
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
                <div>
                    <img src = {isLiked ? heartIconPainted : heartIcon}
                        alt = "heart" 
                        onClick={() => handleLike()}
                    />
                    <span>{piu.likers.length}</span>
                </div>
                <img src = {commentIcon} alt="comment"/>
                <img src = {repiuIcon} alt="repiu"/>

                {owner}

            </Interactions>
        </Box>

    )
} // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

export default Posts;