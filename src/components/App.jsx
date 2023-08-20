import { Component } from 'react';
import { Button } from './Button/Button';
import { Gallery } from './ImageGallery/ImageGallery';
// import { GalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Layout } from './Layout.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { apiQuery } from './api';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, images, page } = this.state;
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.setState({
        loading: true,
      });
      let response = await apiQuery(query, page);
      this.setState({
        images: [...images, ...response.hits],
        loading: false,
      });
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
      page: (prevstate.page += 1),
    }));
  };

  render() {
    const { loading, images } = this.state;
    return (
      <Layout>
        <Searchbar changeQuery={this.changeQuery} />
        {loading ? <Loader /> : <Gallery images={images} />}
        <Button handleLoadMoreButton={this.handleLoadMoreButton} />
      </Layout>
    );
  }
}
