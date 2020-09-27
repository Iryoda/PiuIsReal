import React, { useCallback, useEffect, useState } from 'react';

import Boxes from '../../components/Boxes';
import LogoBox from '../../components/Logo';
import Posts, { User } from '../../components/Post';
import SearchBar from '../../components/SearchBar';
import {Father, Coluna} from './styles';

import { useAuth} from '../../hooks/useAuth';
import { usePost} from '../../hooks/usePost';
import api from '../../services';

const Feed = () =>{

    const { user } = useAuth();
    const [post, setPost] = useState([]);

    /*
      async function locatePost(){
        await api.get('/pius').then(res => {
        setPost(res.data);
        console.log(res.data)
        })
    }
    }, []); 
    */ 
    
    useEffect(()=>{
      async function locatePost(){
        await api.get('/pius').then(res => {
        setPost(res.data);
        console.log(res.data)
        })
    }});

    return(
      <Father>
        <Coluna>
          <LogoBox User= {user}/>
        </Coluna>

        <Coluna>
          <SearchBar />
            {post.map(( item: User)=>{
            return <Posts key={item.id} user = {item}/>
           })}
        </Coluna>

        <Coluna>
          <Boxes 
          Name="Actions" 
          Link="+ New Post"/>
          <Boxes Name="Trendings" Link="#Polijunior"/>
        </Coluna>

      </Father>
    )
  }

 
export default Feed;
