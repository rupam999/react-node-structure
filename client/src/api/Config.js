import axios from 'axios';

export const BASE_URL = 'http://localhost:8000/api';
export const GET_DUMMY = '/dummy';

export default axios.create({
	baseURL: BASE_URL,
});
