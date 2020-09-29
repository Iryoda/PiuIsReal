import React, { createContext, useCallback, useContext, useState } from 'react';

interface SearchContextData{
    word: string;
    wordDefiner(props: string): void;
}


const SearchContext = createContext<SearchContextData>( {} as SearchContextData);

export const SearchProvider: React.FC = ({children}) => {

    const [wordInput, setWordInput] = useState('');
    
    const wordDefiner = useCallback(( props) => {
        setWordInput(props);
    }, []);
    

    return(
        <SearchContext.Provider value= {{ word: wordInput, wordDefiner}}>
            {children}
        </SearchContext.Provider>
    )
}

export function useSearch(): SearchContextData{
    const context = useContext(SearchContext);
    return context;
}