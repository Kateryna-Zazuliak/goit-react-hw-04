import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, query, openModal, setCurrentImage }) => {
  useEffect(() => {
    if (query && images.length === 0) {
      toast(
        "За вашим запитом не знайдено жодного зображення. Спробуйте, будь ласка, з іншим ключовим словом.",
        {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        }
      );
    }
  }, [images.length, query]);

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
