import React, {createContext, useState, useContext, useCallback} from 'react';
import axios from 'axios';

interface AuthState {
    token: string;
    user: string;
}

interface AuthContexData {
    user: string;
    token: string;
    //Declaro a Funçao Login, que possui uma user e password
    tokenRequest(user: string, password: string): void; 
    logout(): void;
    erro: boolean;
}

const AuthContext = createContext<AuthContexData>({} as AuthContexData);


export const AuthProvider: React.FC = ({ children}) => {

    const [erroState, setErroState] = useState(false); //Caso Há um erro no Request


    //Aqui pega os dados que passei do Request e coloca na const userData
    const [userData, setUserData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@Pipiuwer:token'); // Pega no storage o valor de token
        const user = localStorage.getItem('@Pipiuwer:user'); // Pega no storage o valor de user

        if (user && token) { //Se tiver user e token retorna os valores deles
            return { token, user };
        }

        return {} as AuthState;
     });

     //Parte de logout 

    const logout = useCallback(() => {
        localStorage.clear();
        /*
        localStorage.removeItem('@Piupiuwer:token');
        localStorage.removeItem('@Piupiuwer:user');
        */
        setUserData({} as AuthState);
    }, []);
    
     //Parte de Request, não quis usar 'api' de proposito mas posso trocar por 
     // const reponse = await api.post('/login', {user, password}) ao que parece
    const tokenRequest = useCallback(async( user, password) => {
            await axios({
                url: 'http://piupiuwer.polijr.com.br/login/',
                method: 'POST',
                data: {
                    username: user,     //Define user e password com os parametros passados
                    password: password,
                }}).then(res => {    //Parte de tratamento de erro da resposta            
                    const { token } = res.data;
                    localStorage.setItem('@Pipiuwer:token', token);   // Passei token para meu usar Data
                    localStorage.setItem('@Pipiuwer:user', user);     //Quero passar user como parametro.
                    setErroState(false);
                    setUserData({token, user});
                }).catch(error => {
                    setErroState(true);
                }) 
    }, []);

    return(
        <AuthContext.Provider 
            value={{ token: userData.token, //Define token como o valor de token em userData
                     user: userData.user,   //Define token como o valor de user em userData
                     erro: erroState,        
                     tokenRequest,          //Passa a funçao tokenRequest
                     logout}}>             
        {children}
        </AuthContext.Provider>
    )
}


export function useAuth(): AuthContexData {
    const context = useContext(AuthContext);

    return context;
}