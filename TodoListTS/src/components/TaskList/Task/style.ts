import {styled} from 'styled-components'
import { thema } from '../../../styles/thema'

export const Task = styled.article `
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
    
    width:99%;
    min-height:80px;
    background-color: ${thema.primaryColor};
    padding:.1rem;
    transition: all 1s ease-out ;
    p svg {
        display:none;
        
    }
    & div {
        display:none;
    }

    &:hover {
        background-color:blue;
        p svg {
        display:flex;
    }
    & div {
        display:flex;
    }
    }
    p {
       
        width:100%;
        color:white;
        font-weight: bold;
        font-size: 1.5rem;
        word-wrap: break-word;
  
        svg {
            color:yellow;
        }
    }
`

export const ContainerIcons = styled.div `
    font-size:1.5rem;
    flex:1;
    align-self: flex-end;
    & svg:first-child {
        color:white;

    }
    & svg {
        margin-right: 5px;
    }
`