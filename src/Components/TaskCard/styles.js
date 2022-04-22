import styled from "styled-components";

export const TaskCardContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2.5rem;

  border-radius: 0.5rem;

  margin: 0.5rem 0;
  padding: 0.5rem;

  background-color: #fff;

  cursor: pointer;
`;

export const TaskCardIconBox = styled.section`
  display: flex;
  align-items: center;
  height: 100%;

  > img {
    width: 2.2rem;
  }
`;

export const TaskCardTitle = styled.div`
  display: flex;

  > span {
    display: flex;
    align-items: center;
    height: 100%;
  }

  div > img {
    width: 30px;

    padding: 5px;
    margin-right: 1rem;

    border-radius: 5rem;
    border: 1px solid #000;
  }

  div > section {
    width: 30px;
    height: 30px;

    padding: 5px;
    margin-right: 1rem;

    border-radius: 5rem;
    border: 1px solid #000;
  }
`;
