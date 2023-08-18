import { Img } from './Image.GalleryItem.styled';

export const GalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <>
      <Img src={webformatURL} alt="" />
    </>
  );
};
