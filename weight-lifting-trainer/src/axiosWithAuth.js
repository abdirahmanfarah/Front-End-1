import axios from "axios";

export const axiosWithAuth = () => {

  const token = localStorage.getItem("token")
  return axios.create({
    baseURL: "https://weight-lifting-journal-web25.herokuapp.com/",
    headers: {
      Authorization: `${token}`
    }
  });
};