import React from 'react';

import {Link} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {Container} from './styles';
import {theme1} from '../../assets/style/globalstyle';

interface boxesProps{
    link?: Links;
    
}

export interface Links{
    link1: string;
    link2: string;
    link3: string;
    link4: string;
}

const Trending: React.FunctionComponent<boxesProps> = (props) => {

    return(
        <ThemeProvider theme={theme1}>
            <Container>
            <span><strong>Trendings</strong></span>
                <br/><br/>
                <Link to="/feed">
                <a>{props.link}</a>
                </Link>
            </Container>
        </ThemeProvider>
    )
}

export default Trending;