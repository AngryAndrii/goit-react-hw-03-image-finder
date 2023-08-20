import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
import { nanoid } from 'nanoid';

export const Gallery = ({ images }) => {
  return (
    <List>
      {images.map(({ webformatURL, largeImageURL }) => {
        return (
          <li key={nanoid()}>
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
