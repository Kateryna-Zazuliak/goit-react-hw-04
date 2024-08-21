import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal, setCurrentImage }) => {
  return (
    <div>
      <ul className={css.gallery}>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard
              image={image}
              setCurrentImage={setCurrentImage}
              openModal={openModal}
            />
          </li>
        ))}
      </ul>
      <Toaster />
    </div>
  );
};

export default ImageGallery;
