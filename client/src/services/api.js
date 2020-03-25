import axios from './axios'

import { composeQueryString } from '@/utils/queryStringComposer'

export default function api(url, queryParams = null) {
	const config = {
		params: queryParams
	}

	return {
		post: data => axios.post(url, data)
			.then(res => res)
			.catch(e => console.error(e)),

		get: () => axios.get(url, config)
			.then(res => res)
			.catch(e => console.error(e)),

		put: data => axios.put(url, data)
			.then(res => res)
			.catch(e => console.error(e)),
			
		delete: () => axios.delete(url)
			.then(res => res)
			.catch(e => console.error(e))
	}
}