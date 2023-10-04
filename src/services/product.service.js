import axios from "axios";

export const ProductService = {
  async getById(id) {
    const response = await axios.get(`http://localhost:3001/products?id=${id}`);
    return response.data[0];
  },
};
