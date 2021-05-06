import axios from 'axios';

export const http = axios.create({
    baseURL:'https://api.samishop.pe/v1',
    headers: {
        "Content-type": "application/json"
      }
});
