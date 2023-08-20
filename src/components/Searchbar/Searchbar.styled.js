import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  margin: 0 auto;
  height: 60px;
  border-bottom: 2px solid orange;
  justify-content: center;
  align-items: center;
  background-color: lightblue;

  input {
    width: 250px;
    height: 35px;
    border: 1px solid black;
    transition: all 200ms ease-in-out;
  }

  input:is(:hover, :active, :focus, :focus-visible),
  button:is(:hover, :active, :focus) {
    border: 1px solid orange;
    outline: none;
  }

  button {
    width: 75px;
    height: 35px;
  }
`;
