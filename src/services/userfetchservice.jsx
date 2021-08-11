import axios from "axios";
import { API_URL } from "./apiEndPoint";

class UserServiceFetch {
  getUsers() {
    const token = JSON.parse(localStorage.getItem("login"));
    return axios({
      url: `${API_URL}/fetchAllUsers`,
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
    }).then((res) => res?.data);
  }
}

export default new UserServiceFetch();
