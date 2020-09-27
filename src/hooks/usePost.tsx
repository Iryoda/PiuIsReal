import React, { createContext, useCallback, useState, useContext} from 'react';
import api from '../services';

interface PostContextData{
    Data: object;
    getPost(): void;

}

const PostContext= createContext<PostContextData>( {} as PostContextData);

export const PostProvider: React.FC = ({children}) => {

    const[postData, setPostData] = useState([]);


    const getPost = useCallback(async() => {
            await api.get('/pius').then(res => {
            console.log(res.data);
            setPostData(res.data);
        })  
    }, []);

    return(
        <PostContext.Provider value={{ getPost, Data: postData}}>
            {children}
        </PostContext.Provider>
    )
}

export function usePost(): PostContextData{
    const context = useContext(PostContext);
    return context;
}