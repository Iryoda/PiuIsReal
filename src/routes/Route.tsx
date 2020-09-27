import React from 'react';
import { Route as ReactRouter, RouteProps as ReactRouteProps, Redirect } from 'react-router-dom';

import { useAuth} from '../hooks/useAuth';

interface RouteProps extends ReactRouteProps{
    isPrivate?: boolean;
    component: React.ComponentType;
}
const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest}) => {
    
    const {user} = useAuth();

    //Sinceramente só copiei não entendi nada disso, só consigo implementar pq tá escrito essa é a melhor maneira?
    //Entendo a ideia, pego o useAuth vejo se o cara tem 'user'/ 'token' se não tiver bloqueio as outras paginas.
    //ELe vai usar a marcação 'isPrivate', e se tiver é obrigatório o user. Mas a forma como está escrito faz zero
    //sentido para mim. Vou tentar usar outra maneira.
    return (
        <ReactRouter
         {...rest} // ???
         render= {( {location }) => {    
             //Um segundo return??? E o que  is Private === !!user quer dizer?
             //Pq não iniciar user como 'null' e testar se ele é null?
             return isPrivate === !!user ? 
             (
                <Component /> // ????????????????????????
             ) : ( 
                 <Redirect //Tá aqui ele redireciona 
                    to = {{
                        //Ele vai comparar se isPrivate. Se for true, vai para /feed, senão /login
                        // Notaçao de typescript entendo!.
                        pathname: isPrivate ? '/login' : '/feed', 
                        state: {from: location}
                
                    }}
                />
             )
            }}
        />
    )   
}


export default Route;