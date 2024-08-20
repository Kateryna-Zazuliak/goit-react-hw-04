import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchVisionGallery } from "./components/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "../src/components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchVisionGallery(query, pageNumber);
        setImages((prevImages) =>
          pageNumber === 1 ? data.results : [...prevImages, ...data.results]
        );
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(error.message || "Something went wrong! Please try again!");
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, pageNumber]);
  const handleSearch = (query) => {
    setQuery(query);
    setPageNumber(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPageNumber((prevPage) => prevPage + 1);
  };
  function openModal(image) {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery
            images={images}
            query={query}
            setCurrentImage={setCurrentImage}
            openModal={openModal}
          />
          {isLoading && <Loader />}
          {images.length > 0 && totalPages > pageNumber && (
            <LoadMoreBtn onLoadMore={handleLoadMore} />
          )}
        </>
      )}
      {modalIsOpen && currentImage && (
        <ImageModal
          currentImage={currentImage}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default App;
