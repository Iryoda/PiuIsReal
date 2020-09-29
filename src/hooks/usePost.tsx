import React, { createContext, useCallback, useContext } from 'react';
import Axios from 'axios';
import { useAuth } from './useAuth';



interface PostContextData{
    postItem( location: string, userId: number, text: string) : void;
}

 const PostContext = createContext<PostContextData>({} as PostContextData);

 export const PostProvider: React.FC = ({children}) => {

    const postComment = useCallback(async(location, userId, text)=> {
        const token = localStorage.getItem('@Piupiuwer:token');
        await Axios({
            url: `http://piupiuwer.polijr.com.br/${location}`,
            method: 'POST',
            headers: {
                Authorization: `JWT ${token}`
            },
            data: {
                usuario: userId,
                texto: text,
            }
            }).then(() =>{
                console.log("eeee!");
            }).catch(() =>{
                console.log("erro")
            })
}, []);
    
      return(
          <PostContext.Provider value = {{postItem: postComment}}>
              {children}
          </PostContext.Provider>
      )
}


export function usePost(): PostContextData{
    const context = useContext(PostContext);
    return context;
}