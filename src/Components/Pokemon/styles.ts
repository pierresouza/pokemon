import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  input {
    max-width: 16rem;
    text-align: center;
  }
`;
export const Content = styled.div`
  /* border: 1px solid #ff0000; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.5rem;
  margin-top: 2rem;
`;
export const Item = styled.button`
  background-color: #dcdcdc;
  border: 0;
  text-align: center;
  padding: 0.25rem;
  border-radius: 0.5rem;
`;

export const InputSearch = styled.input``;
