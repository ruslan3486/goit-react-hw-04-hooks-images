import { useState } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem.js";
import styles from "./ImageGallery.module.css";
import Modal from "../Modal/Modal";
import Button from "../Button/Button.js";

const ImageGallery = ({
  images,
  query,
  pageNumber,
  error,
  isLoading,
  fetchImages,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    setLargeImageURL(null);
  };
  const openModal = (url) => {
    toggleModal();
    setLargeImageURL(url);
  };
  return (
    <>
      {error && <h2>{error}</h2>}
      <ul className={styles.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            openModal={openModal}
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        ))}
      </ul>
      {images.length > 0 && (
        <Button onClick={fetchImages} isLoading={isLoading} />
      )}
      {isModalOpen && (
        <Modal onCloseModal={toggleModal}>
          <img src={largeImageURL} alt="" />
        </Modal>
      )}
    </>
  );
};

export default ImageGallery;
