import React from 'react';

import {Box, Holder, Perfil as User, Nametag, Comentario, Interactions, ImgHolder} from './styles'


// O que importa ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const PostTemplate = () => {


// Return ------------------------------------
    return(
        <Box> 
            <User>
                <ImgHolder/>
                    <Nametag>
                    </Nametag>
            </User>
            <Comentario/>
            <Interactions>
                <Holder/>
            </Interactions>
        </Box>
    )
} // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

export default PostTemplate;