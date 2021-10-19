import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ largeImageURL, openModal, webformatURL }) => {
  return (
    <li
      onClick={() => openModal(largeImageURL)}
      className={styles.ImageGalleryItem}
    >
      <img src={webformatURL} alt="" className={styles.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
