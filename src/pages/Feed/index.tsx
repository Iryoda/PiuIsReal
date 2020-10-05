import React, { useEffect, useState, useMemo } from 'react';

import LogoBox from '../../components/Logo';
import Posts, { Piu } from '../../components/Post';
import SearchBar from '../../components/SearchBar';
import {Father, Coluna} from './styles';

import api from '../../services';
import { useAuth} from '../../hooks/useAuth';
import { useSearch } from '../../hooks/useSearch';

import Actions from '../../components/Actions';
import Trending from '../../components/Trending';
import Modal from '../../components/Modal';
import PostTemplate from '../../components/PiuTemplate';
import ModalConfirm from '../../components/modalConfirm';

const Feed = () =>{
    
    let frankstein, contactsFather;
    const {getUser, user, userProps} = useAuth();
    const { word} = useSearch();
    const [pius, setPius] = useState<Piu[]>([]); 
    const [ test, setTest ] = useState(false);

//Varredura de Pius com Like
    const favPiusIds = useMemo(() => {
      const favPius = pius.filter( piu => {
        const piuQueFav = piu.favoritado_por.map(item => item.id)
          return piuQueFav.includes(userProps.id);
      })
      return favPius.map(piu => piu.id);
    }, [pius, userProps]);

//Varredura de Pius Fav
    const likedPiusIds = useMemo( ()=> {
        //Retorna array com o id dos pius que o usuario deu like
        const likedPius = pius.filter(piu => { 
          const usuariosQueDeramLike = piu.likers.map(item => item.id)
          return usuariosQueDeramLike.includes(userProps.id); 
        })
        return likedPius.map(piu => piu.id);
    }, [pius, userProps]);
    
    useEffect(()=>{
      getUser(user);
    }, []);

    useEffect(()=>{
      async function locatePost(){
        await api.get('/pius').then(res => {
        setPius(res.data);
        setTest(true);
        })}
        locatePost();
      }, [pius]);


    if(test)
    {
      frankstein = 
        pius.map(( item: Piu)=>{
        //Search
        if(word == null){ 
          return(
            <Posts 
              key={item.id}
              piu={item}
              user={item.usuario}
              isLiked={likedPiusIds.includes(item.id)}
              isFaved={favPiusIds.includes(item.id)}
            />
          )
        }
        else if(  item.usuario.first_name.toLowerCase().includes(word.toLowerCase()) 
                ||item.usuario.last_name.toLowerCase().includes(word.toLowerCase())
                ||item.usuario.username.toLowerCase().includes(word.toLowerCase()))
        {
          return( 
            <Posts 
              key={item.id} 
              piu={item} 
              user={item.usuario} 
              isLiked={ likedPiusIds.includes(item.id)}
              isFaved={favPiusIds.includes(item.id)}
            />
          )  
        }})
        } else {
          frankstein = 
            <div>
              <PostTemplate/>
              <PostTemplate/>
              <PostTemplate/>
              <PostTemplate/>
              <PostTemplate/>          
            </div>
      };  

    return(
      <div>
      <Modal/>
      <ModalConfirm/>
      <Father >
          <Coluna>
            <LogoBox User= {user}/>
          </Coluna>

          <Coluna >
            <SearchBar />
             {frankstein}
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
