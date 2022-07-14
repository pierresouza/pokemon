import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.5rem;
  margin-top: 2rem;
  padding: 0 10rem;
`;
export const Item = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem 0.25rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: #dcdcdc;
  cursor: pointer;
  transition: all 0.6s ease-in-out;
  max-width: 14rem;
  max-height: 14rem;
  &:hover {
    transform: scale(1.1);
    opacity: 0.7;
  }

  img {
    height: 2rem;
    width: 2rem;
  }
`;

export const InputSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    margin-top: 2rem;
    border: #000;
    opacity: 0.5;
    input {
      border-radius: 0.5rem;
      padding: 0.5rem 0.75rem;
      width: 14rem;
      transition: all 0.5s ease-in-out;
      &:hover {
        background: #b0c4de;
      }
      ::placeholder {
        text-align: center;
      }
    }
  }

  img {
    height: 6rem;
  }
`;
