// Have to install and import axios
import axios from "axios";

// The URL that holds the Quotes route
// URL must have http:// in front of it
const REPLY_URL = `http://localhost:8080/postsreply/`;

// Create our class so we can use the methods in that class
class ReplyService {
  // Method to GET our data from database
  getReply = () => {
    // Remember to return it
    return axios.get(REPLY_URL);
  };

  // Method to POST our data to database
  postReply = (object) => {
    return axios.post(REPLY_URL, object);
  };

  // Method to PATCH an item in the database
  patchReply = (object) => {
    return axios.patch(REPLY_URL, object);
  };

  // Method to DELETE an item in the database
  deleteReply = (id) => {
    return axios.delete(REPLY_URL + id);
  };
}

// Have to export the class so that it's usable throughout the project
export default new ReplyService();
