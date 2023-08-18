import { Component } from 'react';
import { Button } from './Button/Button';
import { Gallery } from './ImageGallery/ImageGallery';
// import { GalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Layout } from './Layout.styled';
// import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import axios from 'axios';
import { Grid } from 'react-loader-spinner';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
  };

  //cat&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.setState({
        loading: true,
      });
      this.start();
    }
  }

  changeQuery = query => {
    this.setState({
      query: query,
      images: [],
    });
  };

  handleLoadMoreButton = () => {
    this.setState(prevstate => ({
      page: (prevstate.page += 1),
    }));
  };
  // prevState.resp.data.hits,
  async start() {
    const resp = await axios.get(
      `https://pixabay.com/api/?q=${this.state.query}&page=1&key=38146382-d0cd2611e4be2665aae5df53b&image_type=photo&orientation=horizontal&per_page=6&page=${this.state.page}`
    );
    console.log(resp.data);
    this.setState({
      images: [...this.state.images, ...resp.data.hits],
      loading: false,
    });
  }

  render() {
    const { loading, images } = this.state;
    return (
      <Layout>
        <Searchbar changeQuery={this.changeQuery} />
        {loading ? (
          <Grid
            height="350"
            width="350"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{
              padding: '50px',
              justifyContent: 'space-around',
            }}
            wrapperClass=""
            visible={true}
          />
        ) : (
          <Gallery images={images} />
        )}
        {/* <Loader /> */}
        <Button handleLoadMoreButton={this.handleLoadMoreButton} />
        {/* <Modal /> */}
        {/* <GalleryItem /> */}
      </Layout>
    );
  }
}
