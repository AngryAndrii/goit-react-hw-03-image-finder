import { Component } from 'react';
import { Button } from './Button/Button';
import { Gallery } from './ImageGallery/ImageGallery';
// import { GalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Layout } from './Layout.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { apiQuery } from './api';
import { Loader } from './Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    loadMore: false,
  };

  noParams = () => toast.error('Please enter search parameters!');
  noImgs = () => toast.error('No images were found for your request');

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (query === '') {
      this.noParams();
    }
    if (page !== prevState.page || query !== prevState.query) {
      this.setState({
        loading: true,
      });
      let response = await apiQuery(query, page);
      if (response.hits.length === 0) {
        this.noImgs();
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...response.hits],
        loadMore: page < Math.ceil(response.totalHits / 12),
        loading: false,
      }));
    }
  }

  changeQuery = query => {
    this.setState({
      query: query,
      images: [],
      page: 1,
    });
  };

  handleLoadMoreButton = () => {
    this.setState(prevstate => ({
      page: prevstate.page + 1,
    }));
  };

  render() {
    const { loading, images, loadMore } = this.state;
    return (
      <>
        <Searchbar changeQuery={this.changeQuery} />
        <Layout>
          {loading ? <Loader /> : <Gallery images={images} />}
          {!loadMore ? (
            <></>
          ) : (
            <Button handleLoadMoreButton={this.handleLoadMoreButton} />
          )}
          <Toaster position="top-left" reverseOrder={false} />
        </Layout>
      </>
    );
  }
}
