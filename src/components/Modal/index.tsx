import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { theme1 } from '../../assets/style/globalstyle';

import { useAuth } from '../../hooks/useAuth';
import { useModal } from '../../hooks/useModal';
import { usePost } from '../../hooks/usePost';
import {Fundo, Content} from './styles';

interface text{
    value: string;
    textLength: number;
}

const Modal = () => {

    const { postItem}  = usePost();
    const {modalState} = useModal();
    const {closeModal} = useModal();

    const [count, setCount] = useState(0);
    const [userComment, setComment] = useState('');

    function handlePost(props: string){
        console.log(props);
    }

    function handleText(props: text){
        setComment(props.value);
        setCount(props.textLength);
        console.log()
    }


    if(modalState){

        return(
            <ThemeProvider theme= {theme1}>
            <Fundo>
                <Content>
                    <span>Comentário</span>
                    <textarea
                        value={userComment}
                        onChange = {(e) => handleText(e.target)}
                    ></textarea>
                    <span> {count}/140</span>
                    <button onClick={()=> closeModal()}> X </button>
                    <button onClick={()=> handlePost(userComment)}> teste</button>
                </Content>
            </Fundo>
        </ThemeProvider>
        )
    }

    else {
        return null;
    }
}

export default Modal;