import styled from "styled-components";

export const ImportantContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 2rem;
`;

export const ImportantTitle = styled.h1`
  font-size: clamp(0.2rem, 1rem + 1.5vw, 4rem);
  color: white;
  border-bottom: 1px solid white;
`;

export const ImportantContent = styled.section`
  width: 100%;
`;
