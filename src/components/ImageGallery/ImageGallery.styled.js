import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;

  li {
    width: 300px;
    height: 200px;
  }
`;
