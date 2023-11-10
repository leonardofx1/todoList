import { styled, keyframes } from "styled-components";
import { thema } from "../../../styles/thema";

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
  position: absolute;
  top: 5px;
  left: 10px;

  font-size: 1.5rem;
  animation: ${iconsAnimation} linear infinite;

  color: ${(props) => props.color};
`;
export const ActionIconContainer = styled.div`
  position: absolute;
  bottom: 5px;
  right: 15px;

  font-size: 1.5rem;
  animation: ${iconsAnimation} linear;

  color:green;

`;

export const ActionIcon= styled.div `
  color: ${(props)=> props.color};
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  gap: .5rem;;
  & span {
    cursor:pointer;
    width: 0px;
    overflow: hidden;
    transition: all 500ms ease-in-out;

  }

  &:hover {
    & span {
     width:80px;
    }
  }
`

