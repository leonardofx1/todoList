import styled from 'styled-components'
import { thema } from '../../styles/thema'


export const Main = styled.main `
    display: flex;

    width:100%;
    min-height:100vh;

    justify-content: center;
    align-items: center;
    background-color:${thema.primaryColor}

`

export const Form = styled.form `
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    

    width:450px;
    height: 450px;
    padding:1rem;
    background-color:${thema.prymariColorBold} ;
    border-radius:15px;
 border:2px solid white;
    label {
        width:80%;
        color:white;
        display:flex;
        flex-direction:column;
        
        gap:1.5rem;
        font-weight: bold;
        font-size:2rem;

        input {
            width:90%;
            border-radius:5px;
            border:none;
            padding:.9rem;
            &::placeholder {
                font-weight: bold;
                font-size: 1.2rem;
                color:#0d0f36;
            }
        }
    }

    button {
        display:flex;
        align-items: center;
        justify-content: center;
        width:80%;
        background-color:${thema.seconColor};
        border-radius:15px;
        border:none;

        font-size:1.2rem;
        font-weight:bold;

        cursor:pointer;

        span {
            margin: 5px 15px 0 0;
            font-size: 2.5rem;
        }
    }
`
