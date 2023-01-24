import { url } from "./endpoint.json";
import axios from "axios";

const http = axios.create({
  baseURL: url,
});

export default http;
