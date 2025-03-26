import axios from "axios";  

export const api = axios.create({
    baseURL: 'https://make-it-backend.vercel.app'
});