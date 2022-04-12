import axios from "axios";
const usersUrl = 'http://localhost:8080/users';
class AuthenticationService {
  signin = (username, password) => {
      return axios.post(`${usersUrl}/api/auth/signin`, {username, password})
        .then(response => {
      
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data)); // converts a JavaScript object or value to a JSON string
          }
          return response.data;
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
  }

  signOut() {
    localStorage.removeItem("user");
  }

  register = async(firstname, lastname, username, email, password) => {
    return axios.post(`${usersUrl}/api/auth/signup`, {
      firstname,
      lastname,
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));; //constructing the JavaScript value or object described by the string
    //The getItem() method returns value of the specified Storage Object item
  }
}

export default new AuthenticationService();