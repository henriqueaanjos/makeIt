import axios from "axios";  

export const api = axios.create({
    baseURL: 'https://makeit-backend-nine.vercel.app/publishedList/0'
});