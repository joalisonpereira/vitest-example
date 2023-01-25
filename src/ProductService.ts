import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com/",
});

export class ProductService {
  static async fetch(): Promise<any> {
    return api.get("/products");
  }
}
