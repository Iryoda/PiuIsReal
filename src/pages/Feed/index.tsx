import React from 'react';

import Boxes from '../../components/Boxes';
import LogoBox from '../../components/Logo';
import Posts from '../../components/Post';
import SearchBar from '../../components/SearchBar';
import { useAuth} from '../../hooks/useAuth';
import {Father, Coluna} from './styles';

const Feed = () =>{

    const { user } = useAuth();

    return(
      <Father>
        <Coluna>
          <LogoBox User= {user}/>
        </Coluna>

        <Coluna>
          <SearchBar />
          <Posts />
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
