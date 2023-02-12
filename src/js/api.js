import axios from "axios";

const URL = "https://pixabay.com/api/";
const KEY = "33578764-f7fbadc221ca7988c16e3a69e";



async function getImage (query,page) {
  const response = await axios.get(`${URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`)

 return response.data.hits;
}
    
export default { getImage };