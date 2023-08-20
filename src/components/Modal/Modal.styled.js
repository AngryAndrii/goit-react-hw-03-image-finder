import { styled } from 'styled-components';

export const Wrapper = styled.div`
  /* position: relative; */
  img {
    width: 100%;
    max-width: 100%;
    object-fit: contain;
  }
  max-height: 90vh;
  width: 75vw;
  overflow: hidden;

  /* padding: 30px 20px; */
`;

export const StyledButton = styled.button`
  position: absolute;
  right: 15px;
  top: 5px;
  width: 50px;
  height: 25px;
  border-radius: 5px;
  background: lightblue;
`;
