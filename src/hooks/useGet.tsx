import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services';

interface Post{}
interface GetContextData{
    getPost(): void;
    postData: Post[];
}


const GetContext = createContext<GetContextData>( {} as GetContextData);

export const GetProvider: React.FC = ({children}) => {
    const [postData, setPostData] = useState([]);

    const getPost = useCallback(async() => {
        await api.get("/pius").then(res => {
            setPostData(res.data);
        })
        
    }, []);
    
    

    return(
        <GetContext.Provider value= {{getPost, postData}}>
            {children}
        </GetContext.Provider>
    )
}

export function useGet(): GetContextData{
    const context = useContext(GetContext);
    return context;
}