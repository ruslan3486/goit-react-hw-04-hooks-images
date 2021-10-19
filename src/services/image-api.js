import axios from "axios";

const fetchImg = ({ query = "", pageNumber = 1 }) => {
  const url = `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=22968189-f518494d66d88c5d71c698a06&image_type=photo&orientation=horizontal&per_page=12`;

  return axios.get(url).then(({ data }) => data.hits);
  // .then((res) => res.json())
  // .then((data) => data.hits);
};

export default fetchImg;
