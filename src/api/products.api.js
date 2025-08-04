import axios from "axios";

export const getAllProducts = () => {
  return axios.get("http://127.0.0.1:8000/api/v1/products/");
};
