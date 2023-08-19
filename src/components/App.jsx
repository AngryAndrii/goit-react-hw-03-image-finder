import { Component } from 'react';
import { Button } from './Button/Button';
import { Gallery } from './ImageGallery/ImageGallery';
// import { GalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Layout } from './Layout.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { apiQuery } from './api';
import { Grid } from 'react-loader-spinner';

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
