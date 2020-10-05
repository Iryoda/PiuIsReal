import React from 'react';
import { useDelete } from '../../hooks/usaDelete';
import { useModal } from '../../hooks/useModal';
import { Fundo } from '../Modal/styles';
import {Box, Content, Display} from './styles';

const ModalConfirm = () =>{
    const{ modalConfirmState, closeConfirmModal, piuId, token } = useModal();
    const {deleteComment} = useDelete();

    function handleDelete(){
        deleteComment(piuId, token);
        closeConfirmModal();

    }

    if(modalConfirmState){
    return(        
    <Fundo>
        <Box>
            <span>Quer mesmo excluir seu post?</span>
            <Display>
                <Content 
                    Colored = {false}
                    onClick = {() => handleDelete()}>
                    <span> Yes</span>
                </Content>
                <Content Colored= {true} onClick = {() => closeConfirmModal()}>
                    <span> No</span>
                </Content>
            </Display>
        </Box>
    </Fundo>
    )}
    else{
        return null;
    }
} 

export default ModalConfirm;