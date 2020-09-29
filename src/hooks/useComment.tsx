import React, { createContext, useCallback, useContext, useState } from 'react';
import { useAuth } from './useAuth';

interface CommentContextData{
    comentario: string;
    postComment(data:string): void;
}


const CommentContext = createContext<CommentContextData>( {} as CommentContextData);

export const CommentProvider: React.FC = ({children}) => {

    const [comment, setComment] = useState('');
    
    const postComment = useCallback((data) => {
        setComment(data);
    }, []);
    
    

    return(
        <CommentContext.Provider value= {{comentario: comment, postComment}}>
            {children}
        </CommentContext.Provider>
    )
}

export function useComment(): CommentContextData{
    const context = useContext(CommentContext);
    return context;
}