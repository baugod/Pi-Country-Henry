import axios from 'axios';


const instance = axios.create({
    baseUrl: process.env.REACT_APP_API || "http://localhost:3001"
});

export default instance;