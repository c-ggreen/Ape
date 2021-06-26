// Have to install and import axios
import axios from "axios";

// The URL that holds the Quotes route
// URL must have http:// in front of it
const MANAGEMENT_URL = `http://localhost:8080/management/`;

// Create our class so we can use the methods in that class
class ManagementService {
  // Method to GET our data from database
  getManagement = () => {
    // Remember to return it
    return axios.get(MANAGEMENT_URL);
  };

  // Method to POST our data to database
  postManagement = (object) => {
    return axios.post(MANAGEMENT_URL, object);
  };

  // Method to PATCH an item in the database
  patchManagement = (object) => {
    return axios.patch(MANAGEMENT_URL, object);
  };

  // Method to DELETE an item in the database
  deleteManagement = (id) => {
    return axios.delete(MANAGEMENT_URL + id);
  };
}

// Have to export the class so that it's usable throughout the project
export default new ManagementService();
