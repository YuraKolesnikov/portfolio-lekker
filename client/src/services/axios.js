import axios from 'axios';

const api =  axios.create({
	baseURL: 'http://localhost:3000'
});

api.interceptors.response.use(
	(res) => { return res; },
	(error) => { return error.response; }
);

export default api;