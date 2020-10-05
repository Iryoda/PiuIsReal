import React, { useEffect, useState } from 'react';

import { useAuth } from '../../hooks/useAuth';
import { useModal } from '../../hooks/useModal';
import { usePost } from '../../hooks/usePost';
import {Fundo, Content, Counter, Cont, Organizer} from './styles';

import buttonIcon from '../../assets/img/button.svg'

interface text{
    value: string;
    textLength: number;
}

const Modal = () => {

    const {userProps ,token} = useAuth();
    const { postComment}  = usePost();
    const {modalState, closeModal} = useModal();

    const [mod, setMod] = useState(false);
    const [count, setCount] = useState(0);
    const [userComment, setComment] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    function handlePost(props: string){
        if( props.length > 0 && props.length <= 140){
            postComment("pius", userProps.id, props, token)
            closeModal();
        }else if(props.length === 0){
        setErrorMsg("Você precisa escrever algo para poder postar!")
            }else if(props.length > 140){
            setErrorMsg("Ei, você passou o limite!");
        }
    }

    function handleText(props: text){
        setComment(props.value);
        setCount(props.textLength);
        console.log()
    }

    useEffect(()=> {
        if(count > 140){
            setMod(true);
        } else {
            setMod(false);
        }
    }, [count]);

    if(modalState){

        return(
            <Fundo>
                <Content>
                    <Organizer>
                        <div>
                            <span>Comentário</span>
                            <span onClick = {()=> closeModal()}> X </span>
                        </div>
                        <textarea
                            value = {userComment}
                            onChange = {(e) => handleText(e.target)}
                        ></textarea>
                        <Counter 
                            overLimit = {mod}
                            >
                            {count}/140
                        </Counter>
                        <span>{errorMsg}</span>
                        <Cont>
                            <img 
                                src= {buttonIcon}
                                onClick = {() => handlePost(userComment)}
                                alt = "send.svg"/>
                        </Cont>
                    </Organizer>
                </Content>
            </Fundo>
        )
    }

    else {
        return null;
    }
}

export default Modal;