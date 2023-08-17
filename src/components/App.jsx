import { Component } from 'react';
import { Button } from './Button/Button';
import { Gallery } from './ImageGallery/ImageGallery';
import { GalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Layout } from './Layout.styled';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    query: '',
    images: '',
  };

  changeQuery = evt => {
    evt.preventDefault();
    console.log('queryChange');
  };

  render() {
    return (
      <Layout>
        <Searchbar changeQuery={this.changeQuery} />
        <Gallery />
        {/* <Loader /> */}
        <Button />
        {/* <Modal /> */}
        {/* <GalleryItem /> */}
      </Layout>
    );
  }
}
