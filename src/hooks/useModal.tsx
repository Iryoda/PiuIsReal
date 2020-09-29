import React, {createContext, useContext, useState} from 'react';


interface ModalContextData{
    modalState: boolean;
    showModal(): void;
    closeModal(): void;
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

    return(
        <ModalContext.Provider value={{ modalState: modalState, showModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export function useModal(): ModalContextData{
    const context = useContext(ModalContext);
    return context;
}