import React from 'react';

import {Container} from './styles';
import { useModal } from '../../hooks/useModal';


const Actions = () => {

    const {showModal} = useModal();

    return(
    <Container>
         <span><strong>Actions</strong></span>
            <br/><br/>
                <a
                onClick = {() => showModal()}
                >+ New Post</a>
        </Container>
    )
}

export default Actions;