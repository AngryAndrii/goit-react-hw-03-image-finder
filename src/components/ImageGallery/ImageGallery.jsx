import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const Gallery = ({ images }) => {
  return (
    <List>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <li key={id}>
            <GalleryItem
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
          </li>
        );
      })}
    </List>
  );
};
