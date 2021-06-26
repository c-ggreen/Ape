// Have to install and import axios
import axios from "axios";

// The URL that holds the Quotes route
// URL must have http:// in front of it
const POSTS_URL = `http://localhost:8080/posts/`;

// Create our class so we can use the methods in that class
class PostService {
  // Method to GET our data from database
  getPost = () => {
    // Remember to return it
    return axios.get(POSTS_URL);
  };

  // Method to POST our data to database
  postPost = (object) => {
    return axios.post(POSTS_URL, object);
  };

  // Method to PATCH an item in the database
  patchPost = (object) => {
    return axios.patch(POSTS_URL, object);
  };

  // Method to DELETE an item in the database
  deletePost = (id) => {
    return axios.delete(POSTS_URL + id);
  };
}

// Have to export the class so that it's usable throughout the project
export default new PostService();
