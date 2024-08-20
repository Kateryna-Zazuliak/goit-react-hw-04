import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.85)",
  },
};
const ImageModal = ({ modalIsOpen, closeModal, currentImage }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={css.modalContent}>
        <img
          src={currentImage.urls.full}
          alt={currentImage.alt_description}
          className={css.modalImage}
        />
        <div className={css.modalDescription}>
          <p>Author: {currentImage.user.name}</p>
          <p>
            Name:{" "}
            {currentImage.description
              ? currentImage.description
              : currentImage.alt_description}
          </p>
          <p>Likes: {currentImage.likes}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
