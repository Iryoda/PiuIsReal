import React, { useEffect, useState } from 'react';

import LogoBox from '../../components/Logo';
import Posts, { Piu } from '../../components/Post';
import SearchBar from '../../components/SearchBar';
import {Father, Coluna} from './styles';

import { useAuth} from '../../hooks/useAuth';

import api from '../../services';
import { useSearch } from '../../hooks/useSearch';
import Actions from '../../components/Actions';
import Trending, {Links} from '../../components/Trending';
import Modal from '../../components/Modal';
import { useComment } from '../../hooks/useComment';

const Feed = () =>{
    
    const {getUser} = useAuth();
    const { userProps } = useAuth();
    const { user } = useAuth();
    const { word} = useSearch();
    
    const [post, setPost] = useState([]); 
    
    useEffect(()=>{
      async function locatePost(){
        await api.get('/pius').then(res => {
        setPost(res.data);
        })}
        getUser(user);
        locatePost();
      }, []);

      console.log(userProps);
    return(
      <div>
        <Modal/>
        <Father>
          <Coluna>
            <LogoBox User= {user}/>
          </Coluna>

          <Coluna >
            <SearchBar />
              {post.map(( item: Piu)=>{
                //Condiçao de search ela vai comporar a 'word' que é o input da search bar se for 'null' vai mostrar todos
                //Se não for vai mostrar o que contiverem a word. Isso é feito na array já carregado, ou seja não faz 
                //requisiçao na api, é mais rapido! porém e limitado aos pius já carregados.
              if(word == null){ 
                return <Posts key={item.id} piu = {item}  user = {item.usuario}/>
              }
              else if(  item.usuario.first_name.toLowerCase().includes(word.toLowerCase()) 
                      ||item.usuario.last_name.toLowerCase().includes(word.toLowerCase())
                      ||item.usuario.username.toLowerCase().includes(word.toLowerCase()))
              {
                return <Posts key={item.id} piu = {item}  user = {item.usuario}/>
              }
            })}
          </Coluna>

          <Coluna>
            <Actions/>
            <Trending/>
          </Coluna>

        </Father>
      </div>
    )
  }

 
export default Feed;
