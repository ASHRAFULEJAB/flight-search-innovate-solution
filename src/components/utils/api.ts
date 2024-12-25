import axios from "axios";

const api = axios.create({
  baseURL: "https://api.innotraveltech.com",
  headers: {
    apikey: "S10944771678913327924",
    secretecode: "dxbz4eCVjJ5U6TevfIUqMVD1LbMG3eWfLdJ14qjQZRy5j",
  },
});

export default api;
