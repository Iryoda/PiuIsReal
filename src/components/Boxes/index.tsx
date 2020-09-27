import React from 'react';

import {Link} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {Container} from './styles';
import {theme1} from '../../assets/style/globalstyle';

interface boxesProps{
    Name: string;
    Link?: string;
    
}

const Boxes: React.FunctionComponent<boxesProps> = (props) => {

    return(
        <ThemeProvider theme={theme1}>
            <Container>
            <span><strong>{props.Name}</strong></span>
                <br/><br/>
                <Link to="/modal">
                   <a>{props.Link}</a>
                </Link>
            </Container>
        </ThemeProvider>
    )
}

export default Boxes;