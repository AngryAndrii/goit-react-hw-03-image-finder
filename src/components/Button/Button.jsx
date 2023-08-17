import { ButtonStyled } from './Button.styled';

export const Button = ({ handleLoadMoreButton }) => {
  return (
    <>
      <ButtonStyled onClick={handleLoadMoreButton}>Load more</ButtonStyled>
    </>
  );
};
