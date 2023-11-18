import { styled, keyframes } from "styled-components";
import { thema } from "../../styles/thema";

const iconsAnimation = keyframes`
  from {
    opacity:0;
 
  }
 
  to {
    opacity: 1;
}
  
`;



export const Task = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  min-height: 80px;
  background-color: ${thema.primaryColor};
  padding: 0.4rem;

  border-radius: 15px;
  p svg {
      display: inline-block;
      animation:none;
      
    }
    & div {
      display: flex;
      animation:none;
    }
    



    @media screen and (min-width:580px) {
    
   
  p svg {
    display: none;
  }
  & div {
    display: none;
  }

  &:hover {
    p svg {
      display: inline-block;
      animation: ${iconsAnimation} 1s ease-in-out;
    }
    & div {
      display: flex;
      animation: ${iconsAnimation} 1s ease-in-out;
    }
  }
  }
`;

export const TaskContent = styled.p`
  width: 100%;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  word-wrap: break-word;

  svg {
    color: yellow;
  }
`;

export const TaskStatusIcon = styled.div`
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  gap:5px;

  position: absolute;
  top: 1px;
  left: 10px;

  font-size: 1.5rem;
  animation: ${iconsAnimation} linear infinite;

  color: ${(props) => props.color};
  @media screen and (max-width:580px) {
    font-size:1.2rem
  
  }
`;
export const ActionIconContainer = styled.div`
  position: absolute;
  bottom: 5px;
  right: 15px;

  font-size: 1.5rem;
  animation: ${iconsAnimation} linear;

  @media screen and (max-width:580px) {
      width:95%;
      margin-rigth:.5rem;
      font-size:1.2rem;
      right: -15px;
    }
`;

export const ActionIcon= styled.div `
  color: ${(props)=> props.color};
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  gap: .5rem;
 
  & span {
    cursor:pointer;
    width: 0px;
    overflow: hidden;
    transition: all 500ms ease-in-out;

 

  }
  @media screen and (max-width:580px) {
    margin-right:1rem;
    span {
      width:auto;
    }
    }

  &:hover {
    & span {
     width:80px;
    }
  }
`

