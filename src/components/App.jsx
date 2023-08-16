import { Button } from './Button/Button';
import { Gallery } from './ImageGallery/ImageGallery';
import { GalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Seatchbar';

export const App = () => {
  return (
    <>
      <Searchbar />
      <Gallery />
      <Loader />
      <Button />
      <Modal />
      <GalleryItem />
    </>
  );
};
