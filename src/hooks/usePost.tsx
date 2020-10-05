import React, { createContext, useCallback, useContext, useState } from 'react';
import Axios from 'axios';

//Interface------------------------------------------
interface PostContextData{
    postComment( location: string, userId: number, text: string, token: string): void;
    darLike( location: string, userId: number, piuId: number, token: string): void;
    erroLike: boolean;
    erroComment: boolean;
}

//Context  ------------------------------------------------------
 const PostContext = createContext<PostContextData>({} as PostContextData);

 export const PostProvider: React.FC = ({children}) => {

    const [erroLike, setErrolike] = useState(false);
    const [erroComment, setErroComment] = useState(false);
//postComment Function ------------------------------------------

    const postComment = useCallback(async(location, userId, text, token)=> {
        await Axios({
            url: `http://piupiuwer.polijr.com.br/${location}/`,
            method: 'POST',
            headers: {
                Authorization: `JWT ${token}`
            },
            data: {
                usuario: userId,
                texto: text,
            }
            }).then(() =>{
                setErroComment(false);
            }).catch(() =>{
                setErroComment(true);
            })
    }, []);
    
//darLike Function ------------------------------------------

    const darLike = useCallback(async(location, userId, piuId, token)=> {
        await Axios({
            url: `http://piupiuwer.polijr.com.br/pius/${location}/`,
            method: 'POST',
            headers: {
                Authorization: `JWT ${token}`
            },
            data: {
                usuario: userId,
                piu: piuId,
            }
            }).then(() =>{
                console.log("eeee!");
                setErrolike(false);
            }).catch(() =>{
                console.log("erro")
                setErrolike(true);
            })
    }, []);

//return do Provider ------------------------------------------

      return(
          <PostContext.Provider value = {{postComment: postComment, darLike: darLike, erroLike: erroLike, erroComment: erroComment}}>
              {children}
          </PostContext.Provider>
      )
}


export function usePost(): PostContextData{
    const context = useContext(PostContext);
    return context;
}