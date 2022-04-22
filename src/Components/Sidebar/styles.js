import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
  display: flex;
  justify-content: center;
  width: 30%;
  height: 100vh;

  > div {
    display: flex;
    flex-direction: column;

    padding-top: 2rem;
  }
`;

export const SidebarMenuLink = styled(Link)`
  display: flex;
  align-items: center;

  color: black;

  font-size: clamp(0.2rem, 1rem + 1.5vw, 4rem);
  text-decoration: none;

  margin: 0.5rem 0;

  > img {
    width: 2.5rem;
    margin-right: 1rem;
  }

  &:hover {
    color: #5fbcf4;
  }
`;
