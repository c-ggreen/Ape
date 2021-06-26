// Have to install and import axios
import axios from "axios";

// The URL that holds the Quotes route
    // URL must have http:// in front of it
const  QUOTES_URL = `http://localhost:8080/quotes/`;

// Create our class so we can use the methods in that class
class QuoteService {
  // Method to GET our data from database
  getQuote = () => {
    // Remember to return it
    return axios.get(QUOTES_URL);
  };

  // Method to POST our data to database
  postQuote = (object) => {
    return axios.post(QUOTES_URL, object);
  };

  // Method to PATCH an item in the database
  patchQuote = (object) => {
    return axios.patch(QUOTES_URL, object);
  };

  // Method to DELETE an item in the database
  deleteQuote = (id) => {
    return axios.delete(QUOTES_URL + id);
  };
}

// Have to export the class so that it's usable throughout the project
export default new QuoteService();
