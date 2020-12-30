// it is a liabrary we use to make request to any type of server or api end point for js

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
