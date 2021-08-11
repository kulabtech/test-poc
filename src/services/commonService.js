import axios from "axios";
import { API_URL } from "./apiEndPoint";

export const postAPI =async (endpoint, data) =>
  await axios({
    url: `${API_URL}/${endpoint}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  }).then((response) => {
    return response;
  });
