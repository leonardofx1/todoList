import styled from 'styled-components'

export const Main = styled.main `
    display: flex;

    width:100%;
    min-height:100vh;

    justify-content: center;
    align-items: center;
    background-color:#294380

`

export const Form = styled.form `
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    width:450px;
    height: 450px;
    padding:1rem;
    background-color: #0d0f36;
    border-radius:15px;

    label {
        width:80%;
        color:white;
        display:flex;
        flex-direction:column;
        
        gap:1rem;
        font-weight: bold;
        font-size:2rem;

        input {
            width:90%;
            border-radius:15px;
            border:none;
            padding:.8rem;
            &::placeholder {
                font-weight: bold;
                font-size: 1.2rem;
                color:#0d0f36;
            }
        }
    }

    button {
        width:80%;
        background-color:#69d2cd;
        color:white;
        padding:.8rem;
        border-radius:15px;
        border:none;

        font-size:1.2rem;
        font-weight:bold;
    }
`
