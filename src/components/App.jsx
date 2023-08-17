import { Component } from 'react';
import { Button } from './Button/Button';
import { Gallery } from './ImageGallery/ImageGallery';
// import { GalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Layout } from './Layout.styled';
// import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import axios from 'axios';

export class App extends Component {
  state = {
    query: '',
    images: '',
    page: 1,
  };

  //cat&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,

  changeQuery = query => {
    this.setState({
      query: query,
      images: '',
    });
  };

  handleLoadMoreButton = () => {
    this.setState(prevstate => ({
      page: (prevstate.page += 1),
    }));
    console.log(this.state);
  };

  start = () => {
    axios.defaults.baseURL = 'https://pixabay.com/api/';
    axios.defaults.headers.common['Authorization'] =
      '38146382-d0cd2611e4be2665aae5df53b';
  };

  render() {
    return (
      <Layout>
        <Searchbar changeQuery={this.changeQuery} />
        <Gallery />
        {/* <Loader /> */}
        <Button handleLoadMoreButton={this.handleLoadMoreButton} />
        {/* <Modal /> */}
        {/* <GalleryItem /> */}
      </Layout>
    );
  }
}
