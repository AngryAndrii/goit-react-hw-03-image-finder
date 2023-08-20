import { Img } from './Image.GalleryItem.styled';
import { Component } from 'react';
import { ModalWindow } from 'components/Modal/Modal';

export class GalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { webformatURL, largeImageURL } = this.props;
    return (
      <>
        <Img src={webformatURL} alt="" onClick={this.openModal} />
        <ModalWindow
          largeUrl={largeImageURL}
          isModalOpen={this.state.isModalOpen}
          onClose={this.closeModal}
        />
      </>
    );
  }
}
