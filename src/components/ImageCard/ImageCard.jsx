import css from "./ImageCard.module.css";

const ImageCard = ({ image, setCurrentImage, openModal }) => {
  const onImageClick = () => {
    setCurrentImage(image);
    openModal();
  };
  return (
    <div onClick={onImageClick} className={css.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
      />
    </div>
  );
};

export default ImageCard;
