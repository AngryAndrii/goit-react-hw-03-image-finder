import Modal from 'react-modal';
import { StyledButton, Wrapper } from './Modal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
  },
};

Modal.setAppElement('#root');

export const ModalWindow = ({ largeUrl, isModalOpen, onClose }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <StyledButton onClick={onClose}>close</StyledButton>
      <Wrapper>
        <img src={largeUrl} alt="" />
      </Wrapper>
    </Modal>
  );
};
