import React, {createContext, useCallback, useContext, useState} from 'react';


interface ModalContextData{
    modalState: boolean;
    modalConfirmState: boolean;
    showModal(): void;
    closeModal(): void;
    showConfirmModal(piuId: number, token: string): void;
    closeConfirmModal(): void;
    piuId: number;
    token: string;
}


const ModalContext= createContext<ModalContextData>({} as ModalContextData);


export const ModalProvider: React.FC = ({children}) =>{

    const [modalState, setModalStatus] = useState(false);

    const showModal = (()=>{
        setModalStatus(true);
    })

    const closeModal = (()=>{
        setModalStatus(false);
    })

//Modal Confirm
    const [modalConfirmState, setModalConfirmState] = useState(false);
    const [piuId, setPiuId] = useState(0);
    const [token, setToken] = useState('');

    const showConfirmModal = useCallback(( piuId, token)=>{
        setPiuId(piuId);
        setToken(token);
        console.log("ioooo");
        setModalConfirmState(true);
    }, []);

    const closeConfirmModal = (()=>{
        setModalConfirmState(false);
    });

    return(
        <ModalContext.Provider value={{ 
            modalState: modalState, 
            modalConfirmState: modalConfirmState,
            piuId: piuId,
            token: token,
            showModal, 
            closeModal,
            showConfirmModal,
            closeConfirmModal,
            }}>
            {children}
        </ModalContext.Provider>
    )
}

export function useModal(): ModalContextData{
    const context = useContext(ModalContext);
    return context;
}