import React, {useEffect, useState} from 'react';

import searchIcon from '../../assets/img/search.svg'; 

import {Content} from './styles';
import { useSearch } from '../../hooks/useSearch';
import { useModal } from '../../hooks/useModal';

const SearchBar = () => {
    const { wordDefiner } = useSearch();
    const [searchProp, setSearchProps] = useState('');
    

    useEffect(()=>{
        wordDefiner(searchProp);
    })

    return(
        <Content>
            <img src = {searchIcon} alt="icon"/>
            <input placeholder = "Type to search..." 
                onChange = {(e) => setSearchProps(e.target.value)}>
                </input>
        </Content>
    )
}

export default SearchBar;