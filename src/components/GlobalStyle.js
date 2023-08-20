import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
button {
  cursor: pointer;
  border: 1px solid black;
  outline: none;
  margin: 0;
  padding: 0;
  background-color: white;
  transition: all 200ms ease-in-out;
  font-size: 16px;
}

  button:is(:hover, :active, :focus) {
    border: 1px solid orange;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }

ul {
  list-style: none;
}
`;
