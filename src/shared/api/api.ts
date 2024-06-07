import axios from 'axios';
import {LOCALSTORAGE_USER_KEY} from "../constants";

const baseURL = import.meta.env.DEV ? "http://localhost:8000" : "https://api.my-app.some-server.com"

const apiInstance = axios.create({
    baseURL,
    headers: {
        Authorization: localStorage.getItem(LOCALSTORAGE_USER_KEY)
    }
})

export default apiInstance;
