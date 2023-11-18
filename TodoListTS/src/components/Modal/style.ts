import styled from "styled-components";
import { thema } from "../../styles/thema";

export const ContainerModal = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.5);

  z-index:5;
 
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${thema.prymariColorBold};

    width: 400px;
    height: 300px;

    border-radius: 1rem;
    label {
      color: white;
      width: 90%;
      font-size: 1.3rem;
    }
    input {
      width: 90%;
      padding: 0.5rem;
      margin-top: 15px;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      padding:.8rem;


      background-color: ${thema.seconColor};

      border-radius: 15px;
      border: none;

      font-size: 1.2rem;
      font-weight: bold;

      cursor: pointer;
    }
  }
`;
