import axios from 'axios';
import { INFO_SERVICE_URL, USER_SERVICE_URL, ERROR_SERVICE_URL } from 'src/constants';

export const apiUserService = axios.create({
    baseURL: USER_SERVICE_URL,
});

export const apiInfoService = axios.create({
    baseURL: INFO_SERVICE_URL,
});

export const errorInfoService = axios.create({
    baseURL: ERROR_SERVICE_URL,
});
