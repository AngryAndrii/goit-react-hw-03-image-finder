import { Component } from 'react';
import { Button } from './Button/Button';
import { Gallery } from './ImageGallery/ImageGallery';
// import { GalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Layout } from './Layout.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { apiQuery } from './api';
import { Loader } from './Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import ScrollToTop from 'react-scroll-to-top';

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
  error404 = () => toast.error("Error happened. let's try later");

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    const queryOnRequest = query.slice(query.indexOf('/') + 1);

    if (queryOnRequest === '') {
      this.noParams();
      return;
    }

    if (page !== prevState.page || query !== prevState.query) {
      this.setState({
        loading: true,
      });
      try {
        let response = await apiQuery(queryOnRequest, page);
        if (response.hits.length === 0) {
          this.noImgs();
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          loadMore: page < Math.ceil(response.totalHits / 12),
          loading: false,
        }));
      } catch (error) {
        this.error404();
      }
    }
  }

  changeQuery = query => {
    this.setState({
      query: `${Date.now()}/${query}`,
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
          <div style={{ marginTop: '30vh' }} />
          <ScrollToTop smooth />
        </Layout>
      </>
    );
  }
}
