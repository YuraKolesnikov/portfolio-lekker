import axios from './axios'

import { composeQueryString } from '@/utils/queryStringComposer'

export default function api(url, queryParams = null, token = null) {
	let headers = buildHeaders(token)

	const config = {
		headers,
		...(!queryParams ? {} : { params: buildParams(queryParams) })
	}

	return {
		post: data => axios.post(url, data, config)
			.then(res => res)
			.catch(e => console.error(e)),

		get: () => axios.get(url, config)
			.then(res => res)
			.catch(e => console.error(e)),

		put: data => axios.put(url, data, config)
			.then(res => res)
			.catch(e => console.error(e)),
			
		delete: () => axios.delete(url, config)
			.then(res => res)
			.catch(e => console.error(e))
	}
}