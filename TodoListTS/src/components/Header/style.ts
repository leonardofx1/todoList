import styled from "styled-components";
import { thema } from "../../styles/thema";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 55px;

  background-color: ${thema.primaryColor};
  border-bottom: 2px solid white;

  h1 {
    color: ${thema.primaryColorBold};
    font-size: 2rem;
    @media screen and (max-width: 350px) {
      font-size: 1.5rem;
    }
  }
`;
