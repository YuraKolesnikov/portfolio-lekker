export const composeQueryString = params => {
	const queryString = new URLSearchParams();
	params.forEach(item => queryString.append(item.key, item.value));
	return queryString;
};