import axios from "axios";

const taskApi = axios.create({ baseURL: "http://127.0.0.1:8000/api/v1/" });

export const getAllProducts = () => {
  return taskApi.get("/products/");
};

export const createProduct = (product) => {
  return taskApi.post("/products/", product, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getProduct = (id) => {
  return taskApi.get(`/products/${id}/`);
};

export const updateProduct = (id, product) => {
  return taskApi.patch(`/products/${id}/`, product);
};

export const deleteProduct = (id) => {
  return taskApi.delete(`/products/${id}/`);
};

export const getAllCategories = () => {
  return taskApi.get("/categories/");
};

export const getProductsByCategory = (categoryName) => {
  return taskApi.get(`/products/${categoryName}/`);
};
