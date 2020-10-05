import React from 'react';

import {Link} from 'react-router-dom';
import {Container} from './styles';

const Trending = () => {

    return(
    <Container>
        <span><strong>Trendings</strong></span>
        <br/><br/>
        <Link to = "/feed">
            <a>#poliolioli</a><br/><br/>
            <a>#nbecnotopo</a><br/><br/>
            <a>#polijunior</a><br/><br/>
            <a>#feaqueaguente</a><br/><br/>
        </Link>
    </Container>

    )
}

export default Trending;