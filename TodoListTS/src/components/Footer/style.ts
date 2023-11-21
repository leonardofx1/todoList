import styled from "styled-components";
import { thema } from "../../styles/thema";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: ${thema.primaryColor};
  color: ${thema.primaryColorBold};

  font-size: 2rem;
  border-top: 2px solid white;
  @media screen and (max-width:350px) {
   font-size:1.5rem ;
  }
`;
