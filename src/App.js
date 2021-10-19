import { useState, useEffect } from "react";
import fetchImg from "./services/image-api";
import Searchbar from "./components/SearchBar/SearchBar";
import { ToastContainer } from "react-toastify";
import ImageGallery from "./components/ImageGallery/ImageGallery.js";

import styles from "./App.module.css";

// const fetchImg = (query = "", pageNumber = 1) => {
//   return fetch(
//     `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=22968189-f518494d66d88c5d71c698a06&image_type=photo&orientation=horizontal&per_page=12`
//   )
//     .then((res) => res.json())
//     .then((data) => data.hits);
// };

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (query) {
      fetchImages();
    }
  }, [query]);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  });

  const handleSearchSubmit = (query) => {
    setQuery(query);
    setImages([]);
    setPageNumber(1);
    setError(null);
  };

  const fetchImages = () => {
    const options = {
      query,
      pageNumber,
    };
    setIsloading(true);

    fetchImg(options)
      .then(
        (images) => setImages((prevState) => [...prevState, ...images]),
        setPageNumber((prevState) => prevState + 1)
      )
      .catch((err) => setError(err))
      .finally(() => setIsloading(false));
  };

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery
        images={images}
        query={query}
        pageNumber={pageNumber}
        error={error}
        isLoading={isLoading}
        fetchImages={fetchImages}
      />

      <ToastContainer />
    </div>
  );
};

export default App;
