import {styled} from 'styled-components'
import { thema } from '../../styles/thema'

export const ContainerTask = styled.section `
    display: flex;
    justify-content: center;
    align-items:center;
    flex-wrap: wrap;
    height:auto;
    max-width:500px;
    min-width:auto;
    width:100%;

    padding:.2rem;
    background-color: ${thema.prymariColorBold};
    margin:1rem;
    padding:.5rem;
    gap:1rem;
`