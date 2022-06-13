import axios from "axios";

const axiosClient = () => {
  return axios.create({
    baseURL: "https://restcountries.com/v2/" 
  });
}

export default axiosClient
