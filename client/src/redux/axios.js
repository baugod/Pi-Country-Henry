import axios from 'axios';


const instance = axios.create({
    baseUrl:"http://localhost:3001"
});

export default instance;