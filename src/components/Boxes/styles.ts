import styled from 'styled-components';
import {theme1} from '../../assets/style/globalstyle';


export const Container = styled.div`
    background: ${props => theme1.box};
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem;
    border-radius: 20px;
    font-size: 1.4rem;

    a{
        text-decoration: none;
        outline: none;
        color: #00d1ff;
    }
    
`;
