import axios from './Config';

export const getRequest = async (endPoint, params = {}) => {
	return axios.get(endPoint, { params });
};
