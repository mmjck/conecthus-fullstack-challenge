import axios from "axios";

// TODO: use .env
const AxiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:3001'
});

export default AxiosInstance;