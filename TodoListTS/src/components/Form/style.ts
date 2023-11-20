import styled from "styled-components";
import { thema } from "../../styles/thema";

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  min-height: 100vh;

  padding: 0.5rem;

  justify-content: center;
  align-items: center;

  background-color: ${thema.primaryColor};
  @media screen and (max-width: 580px) {
    width: auto;
    height: auto;

    justify-content: center;
    gap:1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 450px;
  height: 100px;

  min-width: 320px;

  padding: 1rem;
  background-color: ${thema.primaryColorBold};
  border-radius: 15px;
  border: 2px solid white;
  margin:0 1rem;
  @media screen and (max-width: 580px) {
    width: 90%;
    margin-bottom: -1rem;
  }


  label {
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;

    gap: 1.5rem;
    font-weight: bold;
    font-size: 2rem;
  }
`;

export const ContainerInput = styled.div`
  display:flex;
  justify-content: center;

  width:100%;
  
  input {
    width:100%;
    border-radius: 5px 0 0 5px;
    border: none;
    padding: 0.9rem;

    &::placeholder {
      font-weight: bold;
      font-size: 1.2rem;
      color: #0d0f36;
    }
    &:focus {
      outline: none;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    background-color: ${thema.seconColor};
    border-radius: 0 5px 5px 0;
    border: none;

    font-size: 1.8rem;
    font-weight: bold;

    cursor: pointer;


  }
`;

export const ContainerTask = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
  max-width: 500px;
  min-width: auto;
  width: 100%;

  background-color: ${thema.primaryColorBold};

  padding: 0.5rem;
  gap: 1rem;
  @media screen and (max-width: 580px) {
    width: 100%;
    align-self: self-start;
    margin-top:-1rem;
  }
`;
