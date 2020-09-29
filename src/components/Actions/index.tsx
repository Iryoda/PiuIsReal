import React, { useState } from 'react';

import {ThemeProvider} from 'styled-components';
import {Container} from './styles';
import {theme1} from '../../assets/style/globalstyle';
import { useModal } from '../../hooks/useModal';


const Actions = () => {

    const {showModal} = useModal();

    return(
        <ThemeProvider theme={theme1}>
            <Container>
            <span><strong>Actions</strong></span>
                <br/><br/>
                   <a
                    onClick = {() => showModal()}
                   >+ New Post</a>
            </Container>
        </ThemeProvider>
    )
}

export default Actions;