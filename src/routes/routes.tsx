import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';


import Modal from '../components/Modal';
import Feed from '../pages/Feed';
import Welcome from '../pages/Welcome';
import Redirection from './redirect';

const Routes: React.FC = () => {
    return(
        <Switch>
        <Route path="/login" component={Welcome} />
        <Route path="/feed" component  ={Feed} isPrivate/>
        <Route path="/modal" component ={Modal}/>
        <Route component={Redirection}/>
        </Switch>
    );
}

export default Routes;