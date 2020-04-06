import axios from 'axios';

export const HttpService = {
    get: (url: string) => axios.get(url) 
}

